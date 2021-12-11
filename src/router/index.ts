import React from 'react'
import {Login} from '../pages/Login'
import {Calendar} from '../pages/Calendar'

export type Route = {
	path: string
	component: React.ComponentType
	exact?: boolean
}

export enum Routes {
	LOGIN = '/login',
	CALENDAR = '/'
}

export const publicRoutes: Route[] = [
	{path: Routes.LOGIN, exact: true, component: Login}
]

export const privateRoutes: Route[] = [
	{path: Routes.CALENDAR, exact: true, component: Calendar}
]
