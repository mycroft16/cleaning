import { Component, ChangeDetectionStrategy } from '@angular/core'
import { NavController } from 'ionic-angular'
import { Observable } from 'rxjs'
import { AppStore } from '../../app/store/app.store'
import { IProperty } from '../../app/shared/interfaces/property.interface'

import { PropertyPage } from './property/property'

@Component({
  selector: 'page-properties',
  templateUrl: 'properties.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class PropertiesPage {

  public properties: Observable<IProperty[]>;

  constructor(public navCtrl: NavController, private store: AppStore) {
    this.properties = this.store.select(state => state.properties.list);
  }

  loadAccountProperties() {
    this.store.dispatch(factory => factory.properties.loadProperties());  
  }

  viewProperty(index) {
    this.store.dispatch(factory => factory.properties.setActiveProperty(index));
    this.navCtrl.push(PropertyPage);
  }

  clearActiveProperty() {
    this.store.dispatch(factory => factory.properties.clearActiveProperty());
  }

  ionViewDidEnter() {
    this.loadAccountProperties();
  }

}
