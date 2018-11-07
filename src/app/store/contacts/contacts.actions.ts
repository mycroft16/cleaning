import { Action } from '@ngrx/store'
import { IProperty } from '../../shared/interfaces/property.interface'

export class ActionFactory {
    public loadContacts(accountId: number, userId: number): LoadContacts {
        return new LoadContacts(accountId, userId);
    }

    public setActiveProperty(propertyIndex: number): SetActiveProperty {
        return new SetActiveProperty(propertyIndex);
    }

    public clearActiveProperty(): ClearActiveProperty {
        return new ClearActiveProperty();
    }
}

export class InternalActionFactory {
    public loadContactsSuccess(response: IProperty[]): LoadContactsSuccess {
        return new LoadContactsSuccess(response);
    }
}

export class LoadContacts implements Action {
    public static readonly Type = '[Contacts] Load Contacts';
    public readonly type = LoadContacts.Type;
    constructor(public readonly accountId, public readonly userId) { }
}

export class SetActiveProperty implements Action {
    public static readonly Type = '[Property] Set Active Property';
    public readonly type = SetActiveProperty.Type;
    constructor(public readonly propertyIndex) { }
}

export class ClearActiveProperty implements Action {
    public static readonly Type = '[Property] Clear Active Property';
    public readonly type = ClearActiveProperty.Type;
}

export class LoadContactsSuccess implements Action {
    public static readonly Type = '[Contacts] Load Contacts Success';
    public readonly type = LoadContactsSuccess.Type;
    constructor(public readonly response) { }
}

export type Any = LoadContacts | LoadContactsSuccess | SetActiveProperty | ClearActiveProperty;