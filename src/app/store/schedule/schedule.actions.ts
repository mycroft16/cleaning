import { Action } from '@ngrx/store'
import { ISchedule } from '../../shared/interfaces/schedule.interface'

export class ActionFactory {
    public loadSchedule(accountId: number, userId: number, date: string): LoadSchedule {
        return new LoadSchedule(accountId, userId, date);
    }

    // public setActiveNotification(notificationIndex: number): SetActiveNotification {
    //     return new SetActiveNotification(notificationIndex);
    // }

    // public clearActiveNotification(): ClearActiveNotification {
    //     return new ClearActiveNotification();
    // }
}

export class InternalActionFactory {
    public loadScheduleSuccess(response: ISchedule[]): LoadScheduleSuccess {
        return new LoadScheduleSuccess(response);
    }
}

export class LoadSchedule implements Action {
    public static readonly Type = '[Schedule] Load Schedule';
    public readonly type = LoadSchedule.Type;
    constructor(public readonly accountId, public readonly userId, public readonly date) { }
}

// export class SetActiveNotification implements Action {
//     public static readonly Type = '[Notification] Set Active Notification';
//     public readonly type = SetActiveNotification.Type;
//     constructor(public readonly notificationIndex) { }
// }

// export class ClearActiveNotification implements Action {
//     public static readonly Type = '[Notification] Clear Active Notification';
//     public readonly type = ClearActiveNotification.Type;
// }

export class LoadScheduleSuccess implements Action {
    public static readonly Type = '[Schedule] Load Schedule Success';
    public readonly type = LoadScheduleSuccess.Type;
    constructor(public readonly response) { }
}

export type Any = LoadSchedule | LoadScheduleSuccess;