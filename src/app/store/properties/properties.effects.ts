import 'rxjs/add/operator/switchMap'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Action } from '@ngrx/store'
import { Effect, Actions } from '@ngrx/effects'

import { AppStore } from '../app.store'
import { PropertiesService } from './properties.service'
import * as PropertiesActions from './properties.actions'

@Injectable()
export class PropertiesEffects {

    @Effect()
    public loadProperties: Observable<Action> = this.actions.ofType(PropertiesActions.LoadProperties.Type)
        .switchMap((action: PropertiesActions.LoadProperties) =>
            this.service.loadProperties(action.accountId, action.userId)
                .map(response => this.store.create(factory => factory.properties.loadPropertiesSuccess(response)))
        )

    constructor(
        private actions: Actions,
        private store: AppStore,
        private service: PropertiesService
    ) { }
}