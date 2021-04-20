import { Context } from 'aws-lambda'
import { BadRequestError } from '../../../../errors'
import { createWebsocketHandler } from '../../../../util'

const controller = async (_event: WebsocketAPIGatewayEvent, _context: Context) => {
	// The WebsocketHandler automatically handles sending back error messages to the current client
	throw new BadRequestError('Invalid message or action received')
}

export const handler = createWebsocketHandler(controller)
