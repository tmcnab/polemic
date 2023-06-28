import Layout from '../components/Layout'
import React, { FormEventHandler } from 'react'

const Index = () => {
	const onSubmit: FormEventHandler<HTMLFormElement> = (...args) => {
		console.log('SignIn::onSubmit', args)
	}

	return (
		<Layout title='Polemic Demo - Sign In'>
			<main className="container">
				<article className="grid">
					<div>
						<hgroup>
							<h1>Sign in</h1>
							<h2>A minimalist layout for Login pages</h2>
						</hgroup>
						<form onSubmit={onSubmit}>
							<input
								aria-label="Login"
								autoComplete="nickname"
								name="login"
								placeholder="Login"
								required
								type="text"
							/>
							<input
								aria-label="Password"
								autoComplete="current-password"
								name="password"
								placeholder="Password"
								required
								type="password"
							/>
							<button type="submit" className="contrast">Login</button>
						</form>
					</div>
				</article>
			</main>
		</Layout>
	)
}


export default Index