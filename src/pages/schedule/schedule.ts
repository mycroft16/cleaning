import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SchedulePage {

  constructor(public navCtrl: NavController) {

  }

}
