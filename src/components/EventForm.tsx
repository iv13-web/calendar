import {ChangeEvent, FC, useState} from 'react'
import {Button, DatePicker, Form, Input, Row, Select} from 'antd'
import {rules} from '../utils/rules'
import {User} from '../models/User'
import {Event} from '../models/Event'
import {Moment} from 'moment'
import {formatDate} from '../utils/date'
import {useAppSelector} from '../hooks/useAppSelector'

type PropTypes = {
	guests: User[]
	onSubmit: (calendarEvent: Event) => void
}

export const EventForm: FC<PropTypes> = ({guests, onSubmit}) => {
	const [event, setEvent] = useState<Event>({
		creator: '',
		guest: '',
		date: '',
		description: '',
	})

	const creator = useAppSelector(state => state.auth.user.name)

	const setDescription = (e: ChangeEvent<HTMLInputElement>): void => {
		setEvent({...event, description: e.target.value})
	}

	const setGuest = (guest: string): void => setEvent({...event, guest})

	const setDate = (date: Moment | null) => {
		if (date) {
			setEvent({...event, date: formatDate(date.toDate())})
		}
	}

	const handleSubmit = () => {
		onSubmit({...event, creator})
	}

	return (
		<Form onFinish={handleSubmit}>
			<Form.Item
				labelCol={{span: 5}}
				label='Date'
				name='date'
				rules={[rules.required(), rules.isDateAfter('Некорректная дата')]}
			>
				<DatePicker style={{width: '100%'}} onChange={setDate}/>
			</Form.Item>

			<Form.Item
				labelCol={{span: 5}}
				label='Users'
				name='users'
				rules={[rules.required()]}
			>
				<Select onChange={setGuest}>
					{guests.map((guest) => (
						<Select.Option key={guest.email} value={guest.name}>
							{guest.name}
						</Select.Option>
					))}
				</Select>
			</Form.Item>

			<Form.Item
				labelCol={{span: 5}}
				label='Info'
				name='info'
				rules={[rules.required()]}
			>
				<Input
					autoComplete='off'
					value={event.description}
					onChange={setDescription}
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
