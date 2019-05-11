import * as UserActions from './user.actions'
import { IUser } from '../../shared/interfaces/user.interface'

export interface State {
    authToken: string;
    expiration: number;
    user: IUser;
}

export const initialState: State = {
    authToken: null,
    expiration: null,
    user: null
}

export function reducer(state: State = initialState, action: UserActions.Any): State {
    if (state === null) state = initialState;

    switch(action.type) {

        case UserActions.GetAuthTokenSuccess.Type: {
            return { ...state, ...{ authToken: action.response.authToken, expiration: action.response.expiration, user: null } }
        }

        case UserActions.LoadUserSuccess.Type: {
            return { ...state, ...{ user: action.response } }
        }

        case UserActions.UpdateUserSuccess.Type: {
            return { ...state, user: action.response }
        }

        case UserActions.ResetUser.Type: {
            return { ...initialState }
        }

        default: {
            return state;
        }

    }
}