import * as NotificationsActions from './notifications.actions'
import { INotification } from '../../shared/interfaces/notification.interface'

export interface State {
    list: INotification[];
    activeNotification: INotification;
}

export const initialState: State = {
    list: null,
    activeNotification: null
}

export function reducer(state: State = initialState, action: NotificationsActions.Any): State {
    if (state === null) state = initialState;

    switch(action.type) {

        case NotificationsActions.LoadNotificationsSuccess.Type: {
            return { ...state, ...{ list: action.response, activeNotification: null } }
        }

        case NotificationsActions.SetActiveNotification.Type: {
            return { ...state, ...{ activeNotification: state.list[action.notificationIndex] } }
        }

        case NotificationsActions.ClearActiveNotification.Type: {
            return { ...state, ...{ activeNotification: null } }
        }

        default: {
            return state;
        }

    }
}