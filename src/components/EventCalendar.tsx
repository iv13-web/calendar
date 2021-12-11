import {Calendar, Card} from 'antd'
import {Event} from 'models/Event'
import {FC} from 'react'

type PropTypes = {
	events: Event[]
}

export const EventCalendar: FC<PropTypes> = () => {

	return (
		<Card>
			<Calendar/>
		</Card>
	)
}
