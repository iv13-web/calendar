import {User} from 'models/User'
import {Event} from 'models/Event'
import {EventActionsEnum, SetEventsAction, SetGuestsAction} from './types'
import {AppDispatch} from '../../index'
import {UserService} from 'api/UserService'

export const EventActionCreators = {
	setGuests: (payload: User[]): SetGuestsAction => ({type: EventActionsEnum.SET_GUESTS, payload}),
	setEvents: (payload: Event[]): SetEventsAction => ({type: EventActionsEnum.SET_EVENTS, payload}),
	fetchGuests: () => async (dispatch: AppDispatch) => {
		try {
			const response = await UserService.getUsers()
			dispatch(EventActionCreators.setGuests(response.data))
		} catch (e) {
			console.log(e)
		}
	},
	createEvent: (calendarEvent: Event) => async (dispatch: AppDispatch) => {
		try {
			const events = localStorage.getItem('events') || '[]'
			const arr = JSON.parse(events) as Event[]
			arr.push(calendarEvent)
			dispatch(EventActionCreators.setEvents(arr))
			localStorage.setItem('events', JSON.stringify(arr))
		} catch (e) {
			console.log(e)
		}
	},
	fetchEvents: (username: string) => async (dispatch: AppDispatch) => {
		try {
			const events = localStorage.getItem('events') || '[]'
			const arr = JSON.parse(events) as Event[]
			const currentUserEvents = arr.filter(calendarEvent => {
				return calendarEvent.creator === username || calendarEvent.guest === username
			})
			dispatch(EventActionCreators.setEvents(currentUserEvents))
		} catch (e) {

		}
	},
}
