import { createElement } from 'react'
import { createServer  } from 'node:http'
import { renderToString } from 'react-dom/server'
import configuration from './functions/configuration'
import Context from './types/Context'
import Files from './types/Files'
import Store from './data/Store'
import { create } from 'node:domain'
import ContextProvider from './Context'

const store = new Store()

const config = configuration()

createServer((request, response) => {
	const context = new Context(request, response)
	const files = new Files()
	
	import(context.route).then(module => {
		const Component = module.default
		const element = createElement(Component, { /* props */ })
		// const contextElement = createElement(ContextProvider.Provider, { /* TODO */ }, element)
		const html = renderToString(element)
		response.writeHead(200, { 'Content-Type': 'text/html' })
		response.end(html)
	}).catch(reason => {
		response.writeHead(404)
		response.end()
	}).finally(() => {
		console.log(request.method, '\t', request.url)
		console.log(response.statusCode, '\t', context.route)
	})
}).listen(config.port)
