import { Component } from '@angular/core';

import { PropertiesPage } from '../properties/properties';
import { MorePage } from '../more/more';
import { SchedulePage } from '../schedule/schedule';
import { TodayPage } from '../today/today';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  notificationCount: number = 5;

  tab1Root = TodayPage;
  tab2Root = SchedulePage;
  tab3Root = PropertiesPage;
  tab4Root = MorePage;

  constructor() {

  }
}
