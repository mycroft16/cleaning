import 'rxjs/add/operator/switchMap'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Action } from '@ngrx/store'
import { Effect, Actions } from '@ngrx/effects'

import { AppStore } from '../app.store'
import { UserService } from './user.service'
import * as UserActions from './user.actions'

@Injectable()
export class UserEffects {

    @Effect()
    public getAuthToken: Observable<Action> = this.actions.ofType(UserActions.GetAuthToken.Type)
        .switchMap((action: UserActions.GetAuthToken) =>
            this.service.getAuthToken(action.username, action.password)
                .map(response => this.store.create(factory => factory.user.getAuthTokenSuccess(response)))
        )

    @Effect()
    public loadUser: Observable<Action> = this.actions.ofType(UserActions.LoadUser.Type)
        .switchMap((action: UserActions.LoadUser) =>
            this.service.loadUser()
                .map(response => this.store.create(factory => factory.user.loadUserSuccess(response)))
        )

    @Effect()
    public updateUser: Observable<Action> = this.actions.ofType(UserActions.UpdateUser.Type)
        .switchMap((action: UserActions.UpdateUser) =>
            this.service.updateUser(action.user)
                .map(response => this.store.create(factory => factory.user.updateUserSuccess(response)))
        )

    constructor(
        private actions: Actions,
        private store: AppStore,
        private service: UserService
    ) { }

}