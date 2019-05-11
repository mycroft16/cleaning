import 'rxjs/add/operator/take'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/map'
import { Injectable } from '@angular/core'
import { Action, Store } from '@ngrx/store'
import { Observable } from 'rxjs'

import * as NotificationsActions from './notifications/notifications.actions'
import * as NotificationsState from './notifications/notifications.state'

import * as PropertiesActions from './properties/properties.actions'
import * as PropertiesState from './properties/properties.state'

import * as ScheduleActions from './schedule/schedule.actions'
import * as ScheduleState from './schedule/schedule.state'

import * as UserActions from './user/user.actions'
import * as UserState from './user/user.state'

import * as LoadingIndicatorActions from './loading-indicator/loading-indicator.actions'
import * as LoadingIndicatorState from './loading-indicator/loading-indicator.state'

export type NotificationsSatate = NotificationsState.State;
export type PropertiesState = PropertiesState.State;
export type ScheduleState = ScheduleState.State;
export type UserState = UserState.State;
export type LoadingIndicatorState = LoadingIndicatorState.State;

export interface ActionFactory {
    readonly notifications: NotificationsActions.ActionFactory;
    readonly properties: PropertiesActions.ActionFactory;
    readonly schedule: ScheduleActions.ActionFactory;
    readonly user: UserActions.ActionFactory;
    readonly loadingIndicator: LoadingIndicatorActions.ActionFactory;
}

export interface InternalActionFactory {
    readonly notifications: NotificationsActions.InternalActionFactory;
    readonly properties: PropertiesActions.InternalActionFactory;
    readonly schedule: ScheduleActions.InternalActionFactory;
    readonly user: UserActions.InternalActionFactory;
    readonly loadingIndicator: LoadingIndicatorActions.InternalActionFactory;
}

export interface AppState {
    readonly notifications: NotificationsSatate;
    readonly properties: PropertiesState;
    readonly schedule: ScheduleState;
    readonly user: UserState;
    readonly loadingIndicator: LoadingIndicatorState;
}
export interface AppReducers {
    readonly [reducerName: string]: Function;
}

export const reducers: AppReducers = {
    notifications: NotificationsState.reducer,
    properties: PropertiesState.reducer,
    schedule: ScheduleState.reducer,
    user: UserState.reducer,
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
          notifications: new NotificationsActions.ActionFactory,
          properties: new PropertiesActions.ActionFactory,
          schedule: new ScheduleActions.ActionFactory,
          user: new UserActions.ActionFactory,
          loadingIndicator: new LoadingIndicatorActions.ActionFactory
      }

      private readonly internalActionFactory: InternalActionFactory = {
          notifications: new NotificationsActions.InternalActionFactory,
          properties: new PropertiesActions.InternalActionFactory,
          schedule: new ScheduleActions.InternalActionFactory,
          user: new UserActions.InternalActionFactory,
          loadingIndicator: new LoadingIndicatorActions.InternalActionFactory
      }
}