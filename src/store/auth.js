const state = {
	logged: localStorage.getItem('token')
}

const actions = {
	login: () => {
		return new Promise((resolve, reject) => {
			localStorage.setItem('token', JSON.stringify({
				token: 'abcdef321654'
			}))
			state.logged = true
			resolve()
		})
	},
	
	logout: () => {
		return new Promise((resolve, reject) => {
			localStorage.removeItem('token')
			state.logged = false
			resolve()
		})
	}
}

export default { state, actions }