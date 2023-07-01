import { createContext } from 'react'

export class Context 
{
	get isClient () {
		return false
	}

	get isServer () {
		return true
	}
}

export default createContext(new Context())