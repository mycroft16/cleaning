import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppStore } from '../../../app/store/app.store'
import { IProperty } from '../../../app/shared/interfaces/property.interface'

@Component({
  selector: 'page-property',
  templateUrl: 'property.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PropertyPage {

  public property: IProperty;
  public propertyTab: 'property' | 'people' | 'notes' = 'property';

  constructor(public navCtrl: NavController, private store: AppStore) {
    this.property = this.store.snapshot(state => state.properties.activeProperty);
  }

  ionViewDidLoad() {
  }

}
