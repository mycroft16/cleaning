import { Component, ChangeDetectionStrategy } from '@angular/core'
import { ModalController, NavController } from 'ionic-angular'
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

  constructor(private modalCtrl: ModalController, private navCtrl: NavController, private store: AppStore) {
    this.properties = this.store.select(state => state.properties.list);
  }

  loadAccountProperties() {
    this.store.dispatch(factory => factory.properties.loadProperties(1, 1));  
  }

  viewProperty(index) {
    this.store.dispatch(factory => factory.properties.setActiveProperty(index));
  }

  clearActiveProperty() {
    this.store.dispatch(factory => factory.properties.clearActiveProperty());
  }

  ionViewDidEnter() {
    this.loadAccountProperties();
  }

}
