import 'rxjs/add/operator/take'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/map'
import { Injectable } from '@angular/core'
import { Action, Store } from '@ngrx/store'
import { Observable } from 'rxjs'

import * as PropertiesActions from './properties/properties.actions'
import * as PropertiesState from './properties/properties.state';

import * as LoadingIndicatorActions from './loading-indicator/loading-indicator.actions'
import * as LoadingIndicatorState from './loading-indicator/loading-indicator.state'

export type PropertiesState = PropertiesState.State;
export type LoadingIndicatorState = LoadingIndicatorState.State;

export interface ActionFactory {
    readonly properties: PropertiesActions.ActionFactory;
    readonly loadingIndicator: LoadingIndicatorActions.ActionFactory;
}

export interface InternalActionFactory {
    readonly properties: PropertiesActions.InternalActionFactory;
    readonly loadingIndicator: LoadingIndicatorActions.InternalActionFactory;
}

export interface AppState {
    readonly properties: PropertiesState;
    readonly loadingIndicatory: LoadingIndicatorState;
}
export interface AppReducers {
    readonly [reducerName: string]: Function;
}

export const reducers: AppReducers = {
    properties: PropertiesState.reducer,
    loadingIndicator: LoadingIndicatorState.reducer
}

export type ActionFactoryMapper = (factory: ActionFactory) => Action;
export type InternalActionFactoryMapper = (factory: InternalActionFactory) => Action;
export type StateMapper<T> = (state: AppState) => T;

@Injectable()
export class AppStore {
    constructor(
        private readonly ngrxStore: Store<AppState>
    ) { }

    public dispatch(actionFactoryMapper: ActionFactoryMapper): void {
        this.ngrxStore.dispatch(actionFactoryMapper(this.actionFactory));
    }

    public create(internalActionFactoryMapper: InternalActionFactoryMapper): Action {
        return internalActionFactoryMapper(this.internalActionFactory);
    }

    public select<T>(stateMapper: StateMapper<T>): Observable<T> {
        return this.ngrxStore.select(stateMapper);
    }

    public snapshot<T>(stateMapper: StateMapper<T>): T {
        let snapshot: T;
        this.select(stateMapper).take(1).subscribe((latest: T) => snapshot = latest);

        return snapshot;
    }

    public snapshotCloned<T>(stateMapper: StateMapper<T>): T {
        let snapshot: T;
        this.select(stateMapper).take(1).subscribe((latest: T) => snapshot = latest);
        return JSON.parse(JSON.stringify(snapshot));
      }
    
      public completeSnapshot(): AppState {
        return this.snapshot(state => state);
      }
    
      public match<T>(value: T, stateMapper: StateMapper<T>): boolean {
        return value === this.snapshot(stateMapper);
      }
    
      public blockUntil(stateMapper: StateMapper<boolean>): Observable<boolean> {
        return this.select(stateMapper).filter((selectedValue: boolean) => selectedValue).take(1);
      }
    
      public blockUntilMatch<T>(value: T, stateMapper: StateMapper<T>): Observable<null> {
        return this.select(stateMapper).filter((selectedValue: T) => value === selectedValue).take(1).map(() => null);
      }

      private readonly actionFactory: ActionFactory = {
          properties: new PropertiesActions.ActionFactory,
          loadingIndicator: new LoadingIndicatorActions.ActionFactory
      }

      private readonly internalActionFactory: InternalActionFactory = {
          properties: new PropertiesActions.InternalActionFactory,
          loadingIndicator: new LoadingIndicatorActions.InternalActionFactory
      }
}