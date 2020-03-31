import React from 'react'
import Auth from '../store/auth'

const handleLogin = (props) => {
	Auth.actions.login().then(
		() => {
			props.history.push('/secret')
		}
	)
	.catch(
		() => alert('Login failed')
	)
}

const Login = (props) => (
	<div>
		<h1>Login Page</h1>
		<button onClick={() => handleLogin(props)}>Login</button>
	</div>
)

export default Login