import { Action } from '@ngrx/store'
import { INotification } from '../../shared/interfaces/notification.interface'

export class ActionFactory {
    public loadNotifications(accountId: number, userId: number): LoadNotifications {
        return new LoadNotifications(accountId, userId);
    }

    public setActiveNotification(notificationIndex: number): SetActiveNotification {
        return new SetActiveNotification(notificationIndex);
    }

    public clearActiveNotification(): ClearActiveNotification {
        return new ClearActiveNotification();
    }
}

export class InternalActionFactory {
    public loadNotificationsSuccess(response: INotification[]): LoadNotificationsSuccess {
        return new LoadNotificationsSuccess(response);
    }
}

export class LoadNotifications implements Action {
    public static readonly Type = '[Notification] Load Notifications';
    public readonly type = LoadNotifications.Type;
    constructor(public readonly accountId, public readonly userId) { }
}

export class SetActiveNotification implements Action {
    public static readonly Type = '[Notification] Set Active Notification';
    public readonly type = SetActiveNotification.Type;
    constructor(public readonly notificationIndex) { }
}

export class ClearActiveNotification implements Action {
    public static readonly Type = '[Notification] Clear Active Notification';
    public readonly type = ClearActiveNotification.Type;
}

export class LoadNotificationsSuccess implements Action {
    public static readonly Type = '[Notification] Load Notifications Success';
    public readonly type = LoadNotificationsSuccess.Type;
    constructor(public readonly response) { }
}

export type Any = LoadNotifications | LoadNotificationsSuccess | SetActiveNotification | ClearActiveNotification;