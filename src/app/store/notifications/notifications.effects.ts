import 'rxjs/add/operator/switchMap'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Action } from '@ngrx/store'
import { Effect, Actions } from '@ngrx/effects'

import { AppStore } from '../app.store'
import { NotificationsService } from './notifications.service'
import * as NotificationsActions from './notifications.actions'

@Injectable()
export class NotificationsEffects {

    @Effect()
    public loadNotifications: Observable<Action> = this.actions.ofType(NotificationsActions.LoadNotifications.Type)
        .switchMap((action: NotificationsActions.LoadNotifications) =>
            this.service.loadNotifications(action.accountId, action.userId)
                .map(response => this.store.create(factory => factory.notifications.loadNotificationsSuccess(response)))
        )

    constructor(
        private actions: Actions,
        private store: AppStore,
        private service: NotificationsService
    ) { }
}