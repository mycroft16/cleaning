import * as ScheduleActions from './schedule.actions'
import { ISchedule } from '../../shared/interfaces/schedule.interface'

export interface State {
    list: ISchedule[];
    activeSchedule: ISchedule;
}

export const initialState: State = {
    list: null,
    activeSchedule: null
}

export function reducer(state: State = initialState, action: ScheduleActions.Any): State {
    if (state === null) state = initialState;

    switch(action.type) {

        // case NotificationsActions.LoadNotificationsSuccess.Type: {
        //     return { ...state, ...{ list: action.response, activeNotification: null } }
        // }

        // case NotificationsActions.SetActiveNotification.Type: {
        //     return { ...state, ...{ activeNotification: state.list[action.notificationIndex] } }
        // }

        // case NotificationsActions.ClearActiveNotification.Type: {
        //     return { ...state, ...{ activeNotification: null } }
        // }

        default: {
            return state;
        }

    }
}