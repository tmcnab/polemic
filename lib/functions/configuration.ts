import { readFileSync } from "fs"
import Configuration from "../types/Configuration"
import dotenv from "dotenv"

const configuration = () : Configuration => {
	dotenv.config()

	const result: Configuration = {
		directory: process.env['POLEMIC_WORKING_DIRECTORY'] || process.cwd(),
		https: {},
		port: Number(process.env['HTTPS_PORT']) || 8888
	}

	if (process.env['HTTPS_CERT']) {
		result.https.cert = readFileSync(process.env['HTTPS_CERT'])
	}

	if (process.env['HTTPS_KEY']) {
		result.https.key = readFileSync(process.env['HTTPS_KEY'])
	}
			
	return result
}

export default configuration