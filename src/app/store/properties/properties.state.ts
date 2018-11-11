import * as PropertiesActions from './properties.actions'
import { IProperty } from '../../shared/interfaces/property.interface'

export interface State {
    list: IProperty[];
    activeProperty: IProperty;
}

export const initialState: State = {
    list: null,
    activeProperty: null
}

export function reducer(state: State = initialState, action: PropertiesActions.Any): State {
    if (state === null) state = initialState;

    switch(action.type) {
        
        case PropertiesActions.LoadPropertiesSuccess.Type: {
            return { ...state, ...{ list: action.response, activeProperty: null } }
        }

        case PropertiesActions.SetActiveProperty.Type: {
            return { ...state, ...{ activeProperty: state.list[action.propertyIndex] } }
        }

        case PropertiesActions.ClearActiveProperty.Type: {
            return { ...state, ...{ activeProperty: null } }
        }

        default: {
            return state;
        }

    }
}