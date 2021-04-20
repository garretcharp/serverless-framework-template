import { Context } from 'aws-lambda'
import { createWebsocketHandler } from '../../../../util'

const controller = async (_event: WebsocketAPIGatewayEvent, _context: Context) => {
	// Handle disconnect here (you cannot send another message to this connection at this point)
	// this is normally where you remove database entries for the connection id
}

export const handler = createWebsocketHandler(controller)
