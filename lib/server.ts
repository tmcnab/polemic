import { createServer  } from 'node:http'
import { createServer as createSecureServer } from 'node:https'
import configuration from './functions/configuration'

const config = configuration()

createServer((request, response) => {
	response.writeHead(200, {'Content-Type': 'text/plain'})
	response.write('Hello World')
	response.end()
}).listen(config.port)

console.log('polemic server', config)