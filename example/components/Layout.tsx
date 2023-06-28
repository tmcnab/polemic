import React, { ReactNode } from 'react'

interface Props {
	children: ReactNode
	title: string
}

const Layout = ({ children, title }: Props) => 
	<html>
		<head>			
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<title>{title}</title>
			<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css" />
		</head>
		<body>
			{children}
		</body>
	</html>

export default Layout