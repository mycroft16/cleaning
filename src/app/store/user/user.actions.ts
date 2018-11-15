import { Action} from '@ngrx/store'
import { IUser } from '../../shared/interfaces/user.interface'

export class ActionFactory {
    public getAuthToken(username: string, password: string): GetAuthToken {
        return new GetAuthToken(username, password);
    }

    public loadUser(): LoadUser {
        return new LoadUser();
    }

    public updateUser(user: IUser): UpdateUser {
        return new UpdateUser(user);
    }

    public resetUser(): ResetUser {
        return new ResetUser();
    }
}

export class InternalActionFactory {
    public getAuthTokenSuccess(response: string): GetAuthTokenSuccess {
        return new GetAuthTokenSuccess(response);
    }

    public loadUserSuccess(response: IUser): LoadUserSuccess {
        return new LoadUserSuccess(response);
    }

    public updateUserSuccess(response: IUser): UpdateUserSuccess {
        return new UpdateUserSuccess(response);
    }
}

export class GetAuthToken implements Action {
    public static readonly Type = '[Login] Get Auth Token';
    public readonly type = GetAuthToken.Type;
    constructor(public readonly username, public readonly password) { }
}

export class LoadUser implements Action {
    public static readonly Type = '[Login] Load User';
    public readonly type = LoadUser.Type;
}

export class UpdateUser implements Action {
    public static readonly Type = '[User] Update User';
    public readonly type = UpdateUser.Type;
    constructor(public readonly user) { }
}

export class ResetUser implements Action {
    public static readonly Type = '[User] Reset User';
    public readonly type = ResetUser.Type;
}

export class GetAuthTokenSuccess implements Action {
    public static readonly Type = '[Login] Get Auth Token Success';
    public readonly type = GetAuthTokenSuccess.Type;
    constructor(public readonly response) { }
}

export class LoadUserSuccess implements Action {
    public static readonly Type = '[Login] Load User Success';
    public readonly type = LoadUserSuccess.Type;
    constructor(public readonly response) { }
}

export class UpdateUserSuccess implements Action {
    public static readonly Type = '[User] Update User Success';
    public readonly type = UpdateUserSuccess.Type;
    constructor(public readonly response) { }
}

export type Any = GetAuthToken | LoadUser | UpdateUser | ResetUser | GetAuthTokenSuccess | LoadUserSuccess | UpdateUserSuccess;