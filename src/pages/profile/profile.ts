import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms'
import { NavController } from 'ionic-angular';
import { AppStore } from '../../app/store/app.store'
import { IUser } from '../../app/shared/interfaces/user.interface';


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilePage implements OnInit {

  public user: IUser;
  public profileForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    private store: AppStore,
    private fb: FormBuilder
  ) {
    this.user = this.store.snapshot(state => state.user.user);
  }

  public ngOnInit() {
    this.profileForm = this.fb.group({
      firstName: [this.user.firstName, Validators.required],
      lastName: [this.user.lastName, Validators.required],
      address1: [this.user.address1],
      address2: [this.user.address2],
      city: [this.user.city],
      state: [this.user.state],
      zip: [this.user.zip],
      phoneMobile: [this.user.phoneMobile, Validators.required],
      phoneHome: [this.user.phoneHome],
      phoneOther: [this.user.phoneOther],
      emailAddress: [this.user.emailAddress, [
        Validators.required,
        Validators.email
      ]]
    });
  }

  updateProfile() {
    const updatedUser: IUser = { ...this.user, ...this.profileForm.value }
    if (this.profileForm.valid) {
      this.store.dispatch(factory => factory.user.updateUser(updatedUser));
    }
  }

}
