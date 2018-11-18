import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-update-avatar',
  templateUrl: 'update-avatar.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UpdateAvatarPage {

  constructor(public navCtrl: NavController) {

  }

}
