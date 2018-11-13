import { Component, ChangeDetectionStrategy } from '@angular/core'
import { NavController, NavParams } from 'ionic-angular'
import { AppStore } from '../../app/store/app.store'

import { TabsPage } from '../tabs/tabs'

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private store: AppStore) { }

  getAuth() {
    this.store.dispatch(factory => factory.user.getAuthToken('acm1979@gmail.com', 'admina000509458'));
    this.navCtrl.setRoot(TabsPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
