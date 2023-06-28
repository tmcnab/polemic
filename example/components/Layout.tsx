import React, { ReactNode } from 'react'

interface Props {
	children: ReactNode
	title: string
}

const Layout = ({ children, title }: Props) => 
	<html>
		<head>
			<title>{title}</title>
		</head>
		<body>
			{children}
		</body>
	</html>

export default Layout