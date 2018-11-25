import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IProperty } from '../../../../app/shared/interfaces/property.interface'

@Component({
  selector: 'property-info-component',
  templateUrl: 'property-info.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PropertyInfoComponentPage {

  @Input() public property: IProperty;

  constructor(public navCtrl: NavController) {
  }

}
