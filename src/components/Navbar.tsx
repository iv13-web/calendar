import {FC} from 'react'
import {Header} from 'antd/es/layout/layout'
import {Avatar, Menu, Row} from 'antd'
import {useHistory} from 'react-router-dom'
import {Routes} from '../router'
import {useAppSelector} from '../hooks/useAppSelector'
import {useActions} from '../hooks/useActions'

export const Navbar: FC = () => {
	const {logout} = useActions()
	const {isAuth} = useAppSelector(state => state.auth)
	const {push} = useHistory()

	const goToLoginPage = () => push(Routes.LOGIN)

	return (
		<Header>
			<Row justify='end' align='middle'>
				{isAuth
					? (
						<>
						<Avatar/>
						<Menu theme='dark' mode='horizontal' selectable={false}>
							<Menu.Item onClick={logout} key={1}>Sign out</Menu.Item>
						</Menu>
						</>
					) : (
						<Menu theme='dark' mode='horizontal' selectable={false}>
							<Menu.Item onClick={goToLoginPage} key={1}>Login</Menu.Item>
						</Menu>
					)
				}
			</Row>
		</Header>
	)
}
