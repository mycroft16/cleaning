import { Action } from '@ngrx/store'
import { IProperty } from '../../shared/interfaces/property.interface'

export class ActionFactory {
    public loadContacts(accountId: number, userId: number): LoadContacts {
        return new LoadContacts(accountId, userId);
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

export class LoadContactsSuccess implements Action {
    public static readonly Type = '[Contacts] Load Contacts Success';
    public readonly type = LoadContactsSuccess.Type;
    constructor(public readonly response) { }
}

export type Any = LoadContacts | LoadContactsSuccess;