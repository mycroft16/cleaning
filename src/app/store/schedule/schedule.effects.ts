import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { switchMap, map } from 'rxjs/operators'
import { Action } from '@ngrx/store'
import { Effect, Actions } from '@ngrx/effects'

import { AppStore } from '../app.store'
import { ScheduleService } from './schedule.service'
import * as ScheduleActions from './schedule.actions'

@Injectable()
export class ScheduleEffects {

    @Effect()
    public loadSchedule: Observable<Action> = this.actions.ofType(ScheduleActions.LoadSchedule.Type)
        .pipe(
            switchMap((action: ScheduleActions.LoadSchedule) =>
                this.service.loadSchedule(action.accountId, action.userId, action.date)
                    .pipe(map(response => this.store.create(factory => factory.schedule.loadScheduleSuccess(response))))
            )
        );

    constructor(
        private actions: Actions,
        private store: AppStore,
        private service: ScheduleService
    ) { }
}