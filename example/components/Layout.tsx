import React, { ReactNode } from 'react'

interface Props {
	children: ReactNode
	title: string
}

const Layout = ({ children, title }: Props) =>
	<html lang='en'>
		<head>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<title>{title}</title>
			<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css" />
		</head>
		<body style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
			<nav>
				<ul>
					<li><strong>Music Social</strong></li>
				</ul>
				<ul>
					<li><a href="/">Home</a></li>
					<li><a href="/sign-in" >Sign In</a></li>
				</ul>
			</nav>
			{children}
		</body>
	</html>

export default Layout