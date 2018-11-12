import * as UserActions from './user.actions'
import { IUser, IAuthToken } from '../../shared/interfaces/user.interface'

export interface State {
    authToken: IAuthToken;
    user: IUser;
}

export const initialState: State = {
    authToken: null,
    user: null
}

export function reducer(state: State = initialState, action: UserActions.Any): State {
    if (state === null) state = initialState;

    switch(action.type) {

        case UserActions.GetAuthTokenSuccess.Type: {
            return { ...state, ...{ authToken: action.response, user: null } }
        }

        case UserActions.LoadUserSuccess.Type: {
            return { ...state, ...{ user: action.response } }
        }

        default: {
            return state;
        }

    }
}