export class ApplicationError extends Error {
	public statusText: string
	public statusCode: number

	constructor(message = 'An unknown error has occurred. Try again later.', statusCode = 500, statusText = 'Internal Server Error') {
		super(message)
		this.name = this.constructor.name
		this.statusCode = statusCode
		this.statusText = statusText
	}
}

export class BadRequestError extends ApplicationError {
	constructor(message: string) {
		super(message, 400, 'Bad Request')
	}
}

export class AuthorizationError extends ApplicationError {
	constructor() {
		super('You must be authorized to perform this action.', 401, 'Unauthorized')
	}
}

export class ForbiddenError extends ApplicationError {
	constructor() {
		super('You do not have permission to perform this action.', 403, 'Forbidden')
	}
}
