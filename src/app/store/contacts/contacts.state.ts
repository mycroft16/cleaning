import * as ContactsActions from './contacts.actions';
import { IProperty } from '../../../models/property.model'

export interface State {
    list: IProperty[];
    activeProperty: IProperty;
}

export const initialState: State = {
    list: null,
    activeProperty: null
}

export function reducer(state: State = initialState, action: ContactsActions.Any): State {
    if (state === null) state = initialState;

    switch(action.type) {
        
        case ContactsActions.LoadContactsSuccess.Type: {
            return { ...state, ...{ list: action.response, activeProperty: null } }
        }

        default: {
            return state;
        }

    }
}