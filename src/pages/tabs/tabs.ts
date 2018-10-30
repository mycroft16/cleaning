import { Component } from '@angular/core';

import { ContactsPage } from '../contacts/contacts';
import { MorePage } from '../more/more';
import { NotificationsPage } from '../notifications/notifications';
import { SchedulePage } from '../schedule/schedule';
import { TodayPage } from '../today/today';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TodayPage;
  tab2Root = SchedulePage;
  tab3Root = ContactsPage;
  tab4Root = NotificationsPage;
  tab5Root = MorePage;

  constructor() {

  }
}
