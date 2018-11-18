import { Component, ChangeDetectionStrategy } from '@angular/core'
import { App, NavController } from 'ionic-angular'
import { AppStore } from '../../app/store/app.store'

import { LoginPage } from '../login/login'
import { NotificationsPage } from './notifications/notifications'
import { ProfilePage } from './profile/profile'
import { UpdateAvatarPage } from './update-avatar/update-avatar'

@Component({
  selector: 'page-more',
  templateUrl: 'more.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MorePage {

  constructor(private app: App, private store: AppStore, public navCtrl: NavController) {
    
  }

  updateAvatar() {
    this.navCtrl.push(UpdateAvatarPage);
  }

  updateProfile() {
    this.navCtrl.push(ProfilePage);
  }

  openNotifications() {
    this.navCtrl.push(NotificationsPage);
  }

  logout() {
    this.store.dispatch(factory => factory.user.resetUser());
    this.app.getRootNav().setRoot(LoginPage);
  }

}
