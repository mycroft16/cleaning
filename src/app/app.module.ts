// ANGULAR
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// RXJS
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// IONIC
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// CLEANING
import { MyApp } from './app.component';
import { PAGES } from '../pages';
import { COMPONENTS } from '../components';
import { STORES, EFFECTS, PROVIDERS, metaReducers } from './store';

@NgModule({
  declarations: [
    MyApp,
    ...PAGES,
    ...COMPONENTS
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, { tabsPlacement: 'bottom', tabsHideOnSubPages: true }),
    StoreModule.forRoot(STORES, { metaReducers }),
    StoreDevtoolsModule.instrument(),
    EFFECTS
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ...PAGES,
    ...COMPONENTS
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ...PROVIDERS
  ]
})
export class AppModule {}
