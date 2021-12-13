import {AuthAction, AuthActionsEnum, AuthState} from './types'
import {User} from 'models/User'

const initialState: AuthState = {
	isAuth: false,
	user: {} as User,
	isLoading: false,
	error: '',
}

export function AuthReducer(state = initialState, action: AuthAction): AuthState {
	switch (action.type) {
		case AuthActionsEnum.SET_AUTH:
			return {...state, isAuth: action.payload, isLoading: false}
		case AuthActionsEnum.SET_USER:
			return {...state, user: action.payload}
		case AuthActionsEnum.SET_LOADING:
			return {...state, isLoading: action.payload}
		case AuthActionsEnum.SET_ERROR:
			return {...state, error: action.payload, isLoading: false}
		default:
			return state
	}
}
