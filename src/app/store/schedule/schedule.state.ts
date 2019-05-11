import * as ScheduleActions from './schedule.actions'
import { ISchedule } from '../../shared/interfaces/schedule.interface'
import { IReview } from '../../shared/interfaces/review.interface'

export interface State {
    list: ISchedule[];
    activeSchedule: ISchedule;
    scheduleReviews: IReview[];
}

export const initialState: State = {
    list: null,
    activeSchedule: null,
    scheduleReviews: null,
}

export function reducer(state: State = initialState, action: ScheduleActions.Any): State {
    if (state === null) state = initialState;

    switch(action.type) {

        case ScheduleActions.LoadScheduleSuccess.Type: {
            return { ...state, ...{ list: action.response } }
        }

        case ScheduleActions.SetActiveSchedule.Type: {
            return { ...state, ...{ activeSchedule: state.list[action.scheduleIndex] } }
        }

        case ScheduleActions.ClearActiveSchedule.Type: {
            return { ...state, ...{ activeSchedule: null } }
        }

        case ScheduleActions.LoadScheduleReviewsSuccess.Type: {
            return { ...state, ... { scheduleReviews: action.response } }
        }

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