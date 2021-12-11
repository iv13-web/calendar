import {FC, useState} from 'react'
import {Button, Col, Layout, Modal, Row} from 'antd'
import {EventCalendar} from '../components/EventCalendar'
import {EventForm} from '../components/EventForm'

export const Calendar: FC = () => {
	const [isModalVisible, setModalVisibility] = useState(false)
	const showModal = () => setModalVisibility(true)
	const closeModal = () => setModalVisibility(false)

	return (
		<Layout className='h100 flex jcs'>
			<Col offset={2} span={20}>
				<EventCalendar events={[]}/>
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
					<EventForm/>
				</Modal>
			</Col>
		</Layout>
	)
}
