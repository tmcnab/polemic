import { IncomingMessage, ServerResponse } from "http"
import configuration from "../functions/configuration"

class Context {

	#configuration = configuration()
	#request
	#response

	constructor (request: IncomingMessage, response: ServerResponse) {
		this.#request = request
		this.#response = response
	}

	get route () {
		const path = this.#request.url?.slice(1)
		return [
			this.#configuration.directory,
			'routes',
			path
		].join('/')
	}

}

export default Object.freeze(Context)