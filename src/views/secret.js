import React from 'react'
import Auth from '../store/auth'

const handleLogout = (props) => {
	Auth.actions.logout().then(
		() => {
			props.history.push('/login')
		}
	)
}

const Secret = (props) => (
	<div>
		<h1>Secret Page</h1>
		<button onClick={() => handleLogout(props)}>Logout</button>
	</div>
)

export default Secret