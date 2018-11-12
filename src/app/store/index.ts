import { EffectsModule } from '@ngrx/effects'
import { MetaReducer } from '@ngrx/store'
import { storeFreeze } from 'ngrx-store-freeze'
import { ModuleWithProviders } from '@angular/core'
import { AppState, AppStore } from './app.store'

import { ApiService } from './api/api.service'

import { NotificationsEffects } from './notifications/notifications.effects'
import { NotificationsService } from './notifications/notifications.service'
import * as NotificationsState from './notifications/notifications.state'

import { PropertiesEffects } from './properties/properties.effects'
import { PropertiesService } from './properties/properties.service'
import * as PropertiesState from './properties/properties.state'

import { UserEffects } from './user/user.effects'
import { UserService } from './user/user.service'
import * as UserState from './user/user.state'

import * as LoadingIndicatorState from './loading-indicator/loading-indicator.state'

export const metaReducers: MetaReducer<AppState>[] = [
    storeFreeze
]

export const PROVIDERS: any[] = [
    ApiService,
    NotificationsService,
    PropertiesService,
    UserService,
    AppStore
];

export const EFFECTS: ModuleWithProviders = EffectsModule.forRoot([
    NotificationsEffects,
    PropertiesEffects,
    UserEffects
]);

export const STORES: any = {
    notifications: NotificationsState.reducer,
    properties: PropertiesState.reducer,
    user: UserState.reducer,
    loadingIndicator: LoadingIndicatorState.reducer
}