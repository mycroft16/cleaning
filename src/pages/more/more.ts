import { Component } from '@angular/core'
import { App, NavController } from 'ionic-angular'

import { LoginPage } from '../login/login'
import { NotificationsPage } from '../notifications/notifications'
import { ProfilePage } from '../profile/profile'

@Component({
  selector: 'page-more',
  templateUrl: 'more.html'
})
export class MorePage {

  constructor(private app: App, public navCtrl: NavController) {
    
  }

  updateAvatar() {
    console.log('will open avatar update page');
  }

  updateProfile() {
    this.navCtrl.push(ProfilePage);
  }

  openNotifications() {
    this.navCtrl.push(NotificationsPage);
  }

  logout() {
    this.app.getRootNav().setRoot(LoginPage);
  }

}
