import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IProperty } from '../../../../app/shared/interfaces/property.interface'

@Component({
  selector: 'property-notes-component',
  templateUrl: 'property-notes.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PropertyNotesComponentPage {

  @Input() public property: IProperty;

  constructor(public navCtrl: NavController) {
  }

}
