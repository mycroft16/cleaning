import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ContactsPage } from '../pages/contacts/contacts';
import { MorePage } from '../pages/more/more';
import { NotificationsPage } from '../pages/notifications/notifications';
import { SchedulePage } from '../pages/schedule/schedule';
import { TabsPage } from '../pages/tabs/tabs';
import { TodayPage } from '../pages/today/today';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ScheduleService } from '../services/schedule.service';

@NgModule({
  declarations: [
    MyApp,
    ContactsPage,
    MorePage,
    NotificationsPage,
    SchedulePage,
    TabsPage,
    TodayPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactsPage,
    MorePage,
    NotificationsPage,
    SchedulePage,
    TabsPage,
    TodayPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ScheduleService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
