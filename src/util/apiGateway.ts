import { ApiGatewayManagementApi } from 'aws-sdk'

const offline = process.env.IS_OFFLINE === "true"

export const managementApi = new ApiGatewayManagementApi(
	offline ? { apiVersion: '2029', endpoint: 'http://localhost:3001'} : {}
)

export const sendMessage = (eventOrId: string | WebsocketAPIGatewayEvent, message: string | UnknownObject) => {
	return managementApi.postToConnection({
		ConnectionId: typeof eventOrId === 'string' ? eventOrId : eventOrId.requestContext.connectionId,
		Data: typeof message === 'string' ? message : JSON.stringify(message)
	}).promise()
}

export const closeSocket = (eventOrId: string | WebsocketAPIGatewayEvent) => {
	return managementApi.deleteConnection({
		ConnectionId: typeof eventOrId === 'string' ? eventOrId : eventOrId.requestContext.connectionId
	}).promise()
}
