import { ReactNode } from 'react'

export interface Context {
	request: {

	}

	response: {

	}
}

export interface Renderable {

	getProps: (Context) => Promise<Object>

	render: () => ReactNode

}

export interface Serializable {

}
