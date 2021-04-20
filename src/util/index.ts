import { APIGatewayProxyEventV2, APIGatewayProxyHandlerV2, Handler, Context, APIGatewayProxyResultV2 } from 'aws-lambda'
import { closeSocket, sendMessage } from './apiGateway'

import Response from './response'

type Controller = (event: APIGatewayProxyEventV2, context: Context) => Promise<UnknownObject>

export const createHandler = (controller: Controller) => {
	const handler: APIGatewayProxyHandlerV2 = async (event, context) => {
		try {
			const result = await controller(event, context)
			return Response.success(result, context)
		} catch (error) {
			return Response.error(error, context)
		}
	}

	return handler
}

type WebsocketController = (event: WebsocketAPIGatewayEvent, context: Context) => Promise<unknown>

export const createWebsocketHandler = (controller: WebsocketController) => {
	const handler: Handler<WebsocketAPIGatewayEvent, APIGatewayProxyResultV2> = async (event, context) => {
		try {
			await controller(event, context)
			return Response.success({}, context)
		} catch (error) {
			const response = Response.error(error, context)

			await sendMessage(event, response.body)

			if (event.requestContext.eventType === 'CONNECT') {
				await closeSocket(event)
			}

			return response
		}
	}

	return handler
}

type CronController = (event: ScheduleAPIGatewayEvent, context: Context) => Promise<unknown>

export const createCronHandler = (controller: CronController) => {
	const handler: Handler<ScheduleAPIGatewayEvent, APIGatewayProxyResultV2> = async (event, context) => {
		try {
			await controller(event, context)
			return Response.success({}, context)
		} catch (error) {
			return Response.error(error, context)
		}
	}

	return handler
}
