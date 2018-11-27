import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IRoom } from '../../../../app/shared/interfaces/property.interface'

@Component({
  selector: 'property-rooms-component',
  templateUrl: 'property-rooms.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PropertyRoomsComponentPage {

  @Input() public rooms: IRoom[];

  constructor(public navCtrl: NavController) {
  }

}
