import { createElement } from 'react'
import { createServer  } from 'node:http'
import { renderToString } from 'react-dom/server'
import configuration from './functions/configuration'
import Context from './types/Context'
import Files from './types/Files'

const config = configuration()

createServer((request, response) => {
	const context = new Context(request, response)
	const files = new Files()

	console.log(files)
	
	import(context.route).then(module => {
		const Component = module.default
		const element = createElement(Component, { /* props */ })
		const html = renderToString(element)
		response.writeHead(200, { 'Content-Type': 'text/html' })
		response.end(html)
	}).catch(reason => {
		response.writeHead(500)
		response.end()
	}).finally(() => {
		console.log(request.method, '\t', request.url)
		console.log(response.statusCode, '\t', context.route)
	})
}).listen(config.port)
