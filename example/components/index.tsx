import { Context, Renderable } from 'tsss'
import React from 'react'

export default class Index implements Renderable {

	getProps = async (context: Context) => {
		return {}
	}
	
	render = () => 
		<h1>Hello world</h1>

}