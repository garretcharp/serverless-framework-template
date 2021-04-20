import { APIGatewayProxyEventV2, Context } from 'aws-lambda'
import { createHandler } from '../../../util'

const controller = async (_event: APIGatewayProxyEventV2, _context: Context) => {
	return {
		Hello: 'World!'
	}
}

export const handler = createHandler(controller)
