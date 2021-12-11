import {Switch, Route, Redirect} from 'react-router-dom'
import {privateRoutes, publicRoutes, Route as RouteType, Routes} from './index'
import {useAppSelector} from '../hooks/useAppSelector'

export const AppRouter = () => {
	const {isAuth} = useAppSelector(state => state.auth)

	return (
		isAuth
			? (
				<Switch>
					{privateRoutes.map((route: RouteType) => (
						<Route
							key={route.path}
							path={route.path}
							exact={route.exact}
							component={route.component}
						/>
					))}
					<Redirect to={Routes.CALENDAR}/>
				</Switch>
			) : (
				<Switch>
					{publicRoutes.map((route: RouteType) => (
						<Route key={route.path} {...route}/>
					))}
					<Redirect to={Routes.LOGIN}/>
				</Switch>
			)
	)
}
