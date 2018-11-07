import { EffectsModule } from '@ngrx/effects'
import { MetaReducer } from '@ngrx/store'
import { storeFreeze } from 'ngrx-store-freeze'
import { ModuleWithProviders } from '@angular/core'
import { AppState, AppStore } from './app.store'

import { ApiService } from './api/api.service'

import { ContactsEffects } from './contacts/contacts.effects'
import { ContactsService } from './contacts/contacts.service'
import * as ContactsState from './contacts/contacts.state'

import * as LoadingIndicatorState from './loading-indicator/loading-indicator.state'

export const metaReducers: MetaReducer<AppState>[] = [
    storeFreeze
]

export const PROVIDERS: any[] = [
    ApiService,
    ContactsService,
    AppStore
];

export const EFFECTS: ModuleWithProviders = EffectsModule.forRoot([
    ContactsEffects
]);

export const STORES: any = {
    contacts: ContactsState.reducer,
    loadingIndicator: LoadingIndicatorState.reducer
}