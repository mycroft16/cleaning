import { Action } from '@ngrx/store'
import { ISchedule } from '../../shared/interfaces/schedule.interface'
import { IReview } from '../../shared/interfaces/review.interface'

export class ActionFactory {
    public loadSchedule(accountId: number, userId: number, date: string): LoadSchedule {
        return new LoadSchedule(accountId, userId, date);
    }

    public setActiveSchedule(scheduleIndex: number): SetActiveSchedule {
        return new SetActiveSchedule(scheduleIndex);
    }

    public clearActiveSchedule(): ClearActiveSchedule {
        return new ClearActiveSchedule();
    }

    public loadScheduleReviews(scheduleId: number): LoadScheduleReviews {
        return new LoadScheduleReviews(scheduleId);
    }

}

export class InternalActionFactory {
    public loadScheduleSuccess(response: ISchedule[]): LoadScheduleSuccess {
        return new LoadScheduleSuccess(response);
    }

    public loadScheduleReviewsSuccess(response: IReview[]): LoadScheduleReviewsSuccess {
        return new LoadScheduleReviewsSuccess(response);
    }
}

export class LoadSchedule implements Action {
    public static readonly Type = '[Schedule] Load Schedule';
    public readonly type = LoadSchedule.Type;
    constructor(public readonly accountId, public readonly userId, public readonly date) { }
}

export class LoadScheduleSuccess implements Action {
    public static readonly Type = '[Schedule] Load Schedule Success';
    public readonly type = LoadScheduleSuccess.Type;
    constructor(public readonly response) { }
}

export class SetActiveSchedule implements Action {
    public static readonly Type = '[Schedule] Set Active Schedule';
    public readonly type = SetActiveSchedule.Type;
    constructor(public readonly scheduleIndex) { }
}

export class ClearActiveSchedule implements Action {
    public static readonly Type = '[Schedule] Clear Active Schedule';
    public readonly type = ClearActiveSchedule.Type;
}

export class LoadScheduleReviews implements Action {
    public static readonly Type = '[Schedule] Load Schedule Reviews';
    public readonly type = LoadScheduleReviews.Type;
    constructor(public readonly scheduleId) { }
}

export class LoadScheduleReviewsSuccess implements Action {
    public static readonly Type = '[Schedule] Load Schedule Reviews Success';
    public readonly type = LoadScheduleReviewsSuccess.Type;
    constructor(public readonly response) { }
}

export type Any = LoadSchedule | LoadScheduleSuccess | SetActiveSchedule | ClearActiveSchedule | LoadScheduleReviews | LoadScheduleReviewsSuccess;