import { Context } from 'aws-lambda'
import { createCronHandler } from '../../../util'

const controller = async (event: ScheduleAPIGatewayEvent, _context: Context) => {
	// Do something here
	console.log('Processing cron event: ', event)
	return {}
}

export const handler = createCronHandler(controller)
