import { readdirSync, statSync } from 'node:fs'

const allFiles = (directory: string, fileArray: string[] = []) => {
	const files = readdirSync(directory)

	files.forEach(file => {
		const x = [directory, file].join('/')

		if (statSync(x).isDirectory()) {
			fileArray = allFiles(x, fileArray)
		} else {
			fileArray.push(x)
		}
	})

	return fileArray
}

export default allFiles