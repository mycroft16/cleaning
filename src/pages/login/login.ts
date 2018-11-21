import { Component, ChangeDetectionStrategy } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { NavController, NavParams } from 'ionic-angular'
import { AppStore } from '../../app/store/app.store'

import { TabsPage } from '../tabs/tabs'

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private store: AppStore, private fb: FormBuilder) { }

  loginForm = this.fb.group({
    clUsername: ['acm1979@gmail.com', [
      Validators.required,
      Validators.email
    ]],
    clPassword: ['admina000509458', [
      Validators.required
    ]]
  });

  getAuth() {
    this.store.dispatch(factory => factory.user.getAuthToken(this.loginForm.value.clUsername, this.loginForm.value.clPassword));
    this.logIn();
  }

  logIn() {
    this.store.select(state => state.user.user).subscribe((user) => {
      if (user !== null) {
        this.navCtrl.setRoot(TabsPage);
      }
    });
  }

  ionViewDidLoad() {}

}
