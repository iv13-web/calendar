import {
	AuthActionsEnum,
	SetUserAction,
	SetIsLoadingAction,
	SetAuthAction,
	SetErrorAction,
} from './types'
import {User} from 'models/User'
import {AppDispatch} from '../../index'
import {UserService} from 'api/UserService'

export const AuthActionCreators = {
	setUser: (user: User): SetUserAction => ({type: AuthActionsEnum.SET_USER, payload: user}),
	setIsAuth: (auth: boolean): SetAuthAction => ({type: AuthActionsEnum.SET_AUTH, payload: auth}),
	setIsLoading: (payload: boolean): SetIsLoadingAction  => ({type: AuthActionsEnum.SET_LOADING, payload}),
	setError: (payload: string): SetErrorAction => ({type: AuthActionsEnum.SET_ERROR, payload}),
	login: (email: string, password: string) => async (dispatch: AppDispatch) => {
		try {
			dispatch(AuthActionCreators.setIsLoading(true))
			setTimeout(async () => {
				const response = await UserService.getUsers()
				const user = response.data.find((user) => user.email === email && user.password === password)
				if (user) {
					localStorage.setItem('auth', JSON.stringify({auth: true, email}))
					dispatch(AuthActionCreators.setIsAuth(true))
					dispatch(AuthActionCreators.setUser(user))
				} else {
					dispatch(AuthActionCreators.setError('Invalid email or password'))
				}
				dispatch(AuthActionCreators.setIsLoading(false))
			}, 1000)

		} catch (e) {
			dispatch(AuthActionCreators.setError('Error with login'))
		}
	},
	logout: () => async (dispatch: AppDispatch) => {
		localStorage.removeItem('auth')
		dispatch(AuthActionCreators.setUser({} as User))
		dispatch(AuthActionCreators.setIsAuth(false))
	},
}
