import {FC} from 'react'
import {Button, DatePicker, Form, Input, Row, Select} from 'antd'
import {formRules} from '../utils/formRules'

export const EventForm: FC = () => {
	return (
		<Form>
			<Form.Item
				labelCol={{span: 5}}
				label='Date'
				name='date'
				rules={[formRules.required()]}
			>
				<DatePicker style={{width: '100%'}}/>
			</Form.Item>


			<Form.Item
				labelCol={{span: 5}}
				label='Users'
				name='users'
				rules={[formRules.required()]}
			>
				<Select>
					<Select.Option value='user1'>
						User 1
					</Select.Option>
				</Select>
			</Form.Item>

			<Form.Item
				labelCol={{span: 5}}
				label='Info'
				name='info'
				rules={[formRules.required()]}
			>
				<Input
					autoComplete='off'
					value=''
					onChange={() => {
					}}
				/>
			</Form.Item>
			<Row justify='end'>
				<Form.Item>
					<Button
						type='primary'
						htmlType='submit'
					>
						Create
					</Button>
				</Form.Item>
			</Row>
		</Form>
	)
}
