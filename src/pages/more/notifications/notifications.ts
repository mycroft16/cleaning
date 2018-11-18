import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationsPage {

  constructor(public navCtrl: NavController) {

  }

}
