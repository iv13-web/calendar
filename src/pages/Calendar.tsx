import {FC, useEffect, useState} from 'react'
import {Button, Col, Layout, Modal, Row} from 'antd'
import {EventCalendar} from '../components/EventCalendar'
import {EventForm} from '../components/EventForm'
import {useActions} from '../hooks/useActions'
import {useAppSelector} from '../hooks/useAppSelector'
import {Event} from '../models/Event'

export const Calendar: FC = () => {
	const [isModalVisible, setModalVisibility] = useState(false)
	const {fetchGuests, createEvent, fetchEvents} = useActions()
	const {guests, events} = useAppSelector(state => state.event)
	const {user} = useAppSelector(state => state.auth)

	const showModal = () => setModalVisibility(true)
	const closeModal = () => setModalVisibility(false)

	const addEvent = (calendarEvent: Event) => {
		setModalVisibility(false)
		createEvent(calendarEvent)
	}

	useEffect(() => {
		fetchGuests()
		fetchEvents(user.name)
	}, []);

	return (
		<Layout className='h100 flex jcs'>
			<Col offset={2} span={20}>
				<EventCalendar events={events}/>
				<Row justify='center'>
					<Button onClick={showModal} type='primary'>
						Add event
					</Button>
				</Row>
				<Modal
					title='Add event'
					visible={isModalVisible}
					footer={null}
					onCancel={closeModal}
				>
					<EventForm guests={guests} onSubmit={addEvent}/>
				</Modal>
			</Col>
		</Layout>
	)
}
