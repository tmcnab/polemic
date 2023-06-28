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
		return [
			this.#configuration.directory,
			'routes',
			`index.tsx`
		].join('/')
	}

}

export default Object.freeze(Context)