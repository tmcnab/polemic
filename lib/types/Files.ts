import allFiles from "../functions/allFiles"
import configuration from "../functions/configuration"

class Files {

	#configuration = configuration()
	#routeFiles = new Set<string>([])
	#staticFiles = new Set<string>([])

	constructor () {
		const staticPath = [this.#configuration.directory, 'static'].join('/')
		allFiles(staticPath).forEach(item => {
			this.#staticFiles.add(item.replace(staticPath, ''))
		})

		const routePath = [this.#configuration.directory, 'routes'].join('/')
		allFiles(routePath).forEach(item => {
			this.#routeFiles.add(item.replace(routePath, ''))
		})

		console.log(this.#routeFiles)
		console.log(this.#staticFiles)
	}

	get routes () {
		return []
	}

	get static () {
		return []
	}

}

export default Object.freeze(Files)