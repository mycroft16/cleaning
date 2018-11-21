import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { switchMap, concatMap, map } from 'rxjs/operators'
import { Action } from '@ngrx/store'
import { Effect, Actions } from '@ngrx/effects'

import { AppStore } from '../app.store'
import { UserService } from './user.service'
import * as UserActions from './user.actions'

@Injectable()
export class UserEffects {

    @Effect()
    public getAuthToken: Observable<void | Action> = this.actions.ofType(UserActions.GetAuthToken.Type)
        .pipe(
            switchMap((action: UserActions.GetAuthToken) =>
                this.service.getAuthToken(action.username, action.password)
                    .pipe(
                        concatMap((response) => [
                            this.store.create(factory => factory.user.getAuthTokenSuccess(response)),
                            this.store.create(factory => factory.user.loadUser())
                        ])
                    )
            )
        );

    @Effect()
    public loadUser: Observable<Action> = this.actions.ofType(UserActions.LoadUser.Type)
        .pipe(
            switchMap((action: UserActions.LoadUser) =>
                this.service.loadUser()
                    .pipe(map(response => this.store.create(factory => factory.user.loadUserSuccess(response))))
            )
        );

    @Effect()
    public updateUser: Observable<Action> = this.actions.ofType(UserActions.UpdateUser.Type)
        .pipe(
            switchMap((action: UserActions.UpdateUser) =>
                this.service.updateUser(action.user)
                    .pipe(map(response => this.store.create(factory => factory.user.updateUserSuccess(response))))
            )
        );

    constructor(
        private actions: Actions,
        private store: AppStore,
        private service: UserService
    ) { }

}