import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-today',
  templateUrl: 'today.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodayPage {

  constructor(public navCtrl: NavController) {

  }

}
