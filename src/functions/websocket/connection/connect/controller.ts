import { Context } from 'aws-lambda'
import { createWebsocketHandler } from '../../../../util'

const controller = async (_event: WebsocketAPIGatewayEvent, _context: Context) => {
	// Handle connection here (you cannot send a message to this connection yet)
	// this is normally where you add database entries for the connection id or check authorization

	if (Math.random() > 0.5) {
		throw new Error('This will make connection close at a 50% chance')
	}
}

export const handler = createWebsocketHandler(controller)
