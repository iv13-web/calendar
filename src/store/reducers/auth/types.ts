import {User} from 'models/User'

export type AuthState = {
	isAuth: boolean
	user: User
	isLoading: boolean
	error: string
}

export enum AuthActionsEnum {
	SET_AUTH = 'SET_AUTH',
	SET_USER = 'SET_USER',
	SET_LOADING = 'SET_LOADING',
	SET_ERROR = 'SET_ERROR',
}

export type SetAuthAction = {
	type: AuthActionsEnum.SET_AUTH
	payload: boolean
}
export type SetUserAction = {
	type: AuthActionsEnum.SET_USER
	payload: User
}
export type SetIsLoadingAction = {
	type: AuthActionsEnum.SET_LOADING
	payload: boolean
}
export type SetErrorAction = {
	type: AuthActionsEnum.SET_ERROR
	payload: string
}

export type AuthAction =
	SetAuthAction |
	SetUserAction |
	SetIsLoadingAction |
	SetErrorAction
