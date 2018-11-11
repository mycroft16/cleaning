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

import * as LoadingIndicatorState from './loading-indicator/loading-indicator.state'

export const metaReducers: MetaReducer<AppState>[] = [
    storeFreeze
]

export const PROVIDERS: any[] = [
    ApiService,
    NotificationsService,
    PropertiesService,
    AppStore
];

export const EFFECTS: ModuleWithProviders = EffectsModule.forRoot([
    NotificationsEffects,
    PropertiesEffects
]);

export const STORES: any = {
    notifications: NotificationsState.reducer,
    properties: PropertiesState.reducer,
    loadingIndicator: LoadingIndicatorState.reducer
}