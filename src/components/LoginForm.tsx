import {Button, Card, Form, Input} from 'antd'
import {formRules} from '../utils/formRules'
import {useAppSelector} from '../hooks/useAppSelector'
import {useActions} from '../hooks/useActions'

export const LoginForm = () => {
	const {login} = useActions()
	const {error, isLoading} = useAppSelector(state => state.auth)

	const handleSubmit = ({
		email,
		password
	}: { email: string, password: string }) => {
		login(email, password)
	}


	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo)
	}

	return (
		<Card>
			<Form
				name='basic'
				labelCol={{span: 8}}
				wrapperCol={{span: 16}}
				initialValues={{remember: true}}
				onFinish={handleSubmit}
				onFinishFailed={onFinishFailed}
				autoComplete='off'
			>
				<Form.Item
					label='Email'
					name='email'
					rules={[formRules.required('Enter your email')]}
				>
					<Input/>
				</Form.Item>

				<Form.Item
					label='Password'
					name='password'
					rules={[formRules.required('Enter your password')]}
				>
					<Input.Password/>
				</Form.Item>
				<Form.Item wrapperCol={{offset: 8, span: 16}}>
					<Button type='primary' htmlType='submit' loading={isLoading}>
						Submit
					</Button>
				</Form.Item>
				{error &&
				<p style={{color: 'red', display: 'flex', justifyContent: 'center'}}>
					{error}
				</p>
				}
			</Form>
		</Card>
	)
}
