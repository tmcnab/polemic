type Configuration = {
	directory: string
	https: {
		cert?: Buffer
		key?: Buffer
	}
	port: number
}

export default Configuration