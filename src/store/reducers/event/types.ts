import {User} from 'models/User'
import {Event} from 'models/Event'

export type EventState = {
	guests: User[]
	events: Event[]
}

export enum EventActionsEnum {
	SET_GUESTS = 'SET_GUESTS',
	SET_EVENTS = 'SET_EVENTS',
}

export type SetGuestsAction = {
	type: EventActionsEnum.SET_GUESTS
	payload: User[]
}

export type SetEventsAction = {
	type: EventActionsEnum.SET_EVENTS
	payload: Event[]
}

export type EventAction =
	SetGuestsAction |
	SetEventsAction
