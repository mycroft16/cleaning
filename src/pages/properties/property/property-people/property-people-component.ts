import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IProperty } from '../../../../app/shared/interfaces/property.interface'

@Component({
  selector: 'property-people-component',
  templateUrl: 'property-people.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PropertyPeopleComponentPage {

  @Input() public property: IProperty;

  constructor(public navCtrl: NavController) {
  }

}
