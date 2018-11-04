import 'rxjs/add/operator/switchMap'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Action } from '@ngrx/store'
import { Effect, Actions } from '@ngrx/effects'

// import { AppStore } from '../app.store'
// import { ContactsService } from './contacts.service'
import * as ContactsActions from './contacts.actions'

@Injectable()
export class GoalsEffects {

    @Effect()
    public loadContacts: Observable<Action> = this.actions.ofType(ContactsActions.LoadContacts.Type)
        .switchMap((action: ContactsActions.LoadContacts) =>
            null
            // this.service.loadContacts(action.accountId, action.userId)
                // .map(response => this.store.create(factory => factory.contacts.loadContactsSuccess(response)))
        )

    constructor(
        private actions: Actions,
        // private store: AppStore,
        // private service: GoaslService
    ) { }
}