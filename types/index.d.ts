interface UnknownObject {
	[key: string]: unknown
}

interface WebsocketAPIGatewayEvent {
	body: string
	isBase64Encoded: boolean

	requestContext: {
		apiId: string
		connectedAt: number
		connectionId: string
		domainName: string
		eventType: string
		extendedRequestId: string
		messageDirection: string
		messageId: string
		requestId: string
		requestTime: string
		requestTimeEpoch: number
		routeKey: string
		stage: string
	}
}

interface ScheduleAPIGatewayEvent {
	version: string
	id: string
	'detail-type': string
	source: string
	account: string
	time: string
	region: string
	resources: string[]
	detail: UnknownObject
}
