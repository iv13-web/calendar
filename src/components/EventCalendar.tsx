import {Calendar, Card} from 'antd'
import {Event} from 'models/Event'
import {FC} from 'react'
import {formatDate} from '../utils/date'
import {Moment} from 'moment'

type PropTypes = {
	events: Event[]
}

export const EventCalendar: FC<PropTypes> = ({events}) => {

	const dateCellRender = (value: Moment) => {
		const formattedDate = formatDate(value.toDate())
		const currentDayEvents = events.filter(calendarEvent => {
			return calendarEvent.date === formattedDate
		})

		return (
			<div>
				{currentDayEvents.map((calendarEvent, i) =>
					<div key={i}>{calendarEvent.description}</div>
				)}
			</div>
		)
	}

	return (
		<Card>
			<Calendar
				dateCellRender={dateCellRender}
			/>
		</Card>
	)
}
