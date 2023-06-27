import { createServer  } from 'node:http'
import { renderToString } from 'react-dom/server'
import configuration from './functions/configuration'
import { createElement } from 'react'

const config = configuration()

createServer((request, response) => {
	const file = [
		config.directory, 
		'routes', 
		`${request.url?.replace('/', '')}.tsx`
	].join('/').replace('//', '/')
	console.log(file)

	import(file).then(module => {
		const Component = module.default
		const element = createElement(Component, { /* props */ })
		const html = renderToString(element)
		console.log(html)
		response.writeHead(200, {
			'Content-Type': 'text/html'
		})
		response.end(html)
	}).catch(reason => {
		response.writeHead(500)
		response.end()
	}).finally(() => {
		console.info('done')
	})
}).listen(config.port)

console.log('polemic server', config)