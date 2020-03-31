import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Auth from '../store/auth'

const FALLBACK = '/secret'

export const GuestRoute = ({ component: Component, ...rest}) => {
	return (
		<Route
			{...rest}
			render={props => {
				if (!Auth.state.logged) {
					return <Component {...props} />
				}
				else {
					return (
						<Redirect to={{
								pathname: FALLBACK,
								state: {
									from: props.location
								}
							}}
						/>
					)
				}
			}}
		/>
	)
}
