import { Context } from 'aws-lambda'
import { createWebsocketHandler } from '../../../../util'
import { sendMessage } from '../../../../util/apiGateway'

// event.body.action === 'hello' enforced by APIGateway router

const controller = async (event: WebsocketAPIGatewayEvent, _context: Context) => {
	await sendMessage(event, {
		hello: 'world'
	})
}

export const handler = createWebsocketHandler(controller)
