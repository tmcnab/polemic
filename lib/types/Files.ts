import configuration from "../functions/configuration"

class Files {

	#configuration = configuration()
	#routeFiles = []
	#staticFiles = []

	constructor () {
		[this.#configuration.directory, 'static']
	}

	get routes () {
		return []
	}

	get static () {
		return []
	}

}

export default Object.freeze(Files)