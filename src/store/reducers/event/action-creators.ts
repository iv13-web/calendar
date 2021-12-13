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
	}
}
