import { EffectsModule } from '@ngrx/effects'
import { MetaReducer } from '@ngrx/store'
import { storeFreeze } from 'ngrx-store-freeze'
import { ModuleWithProviders } from '@angular/core'
import { AppState, AppStore } from './app.store'

import { ApiService } from './api/api.service'

import { PropertiesEffects } from './properties/properties.effects'
import { PropertiesService } from './properties/properties.service'
import * as PropertiesState from './properties/properties.state'

import * as LoadingIndicatorState from './loading-indicator/loading-indicator.state'

export const metaReducers: MetaReducer<AppState>[] = [
    storeFreeze
]

export const PROVIDERS: any[] = [
    ApiService,
    PropertiesService,
    AppStore
];

export const EFFECTS: ModuleWithProviders = EffectsModule.forRoot([
    PropertiesEffects
]);

export const STORES: any = {
    properties: PropertiesState.reducer,
    loadingIndicator: LoadingIndicatorState.reducer
}