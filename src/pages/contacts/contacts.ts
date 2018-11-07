import { Component, ChangeDetectionStrategy } from '@angular/core'
import { ModalController, NavController } from 'ionic-angular'
import { Observable } from 'rxjs'
import { AppStore } from '../../app/store/app.store'
import { IProperty } from '../../app/shared/interfaces/property.interface'

import { PropertyPage } from './property/property'

@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ContactsPage {

  public contacts: Observable<IProperty[]>;

  constructor(private modalCtrl: ModalController, private navCtrl: NavController, private store: AppStore) {
    this.contacts = this.store.select(state => state.contacts.list);
  }

  loadAccountContacts() {
    this.store.dispatch(factory => factory.contacts.loadContacts(1, 1));  
  }

  viewProperty(index) {
    this.store.dispatch(factory => factory.contacts.setActiveProperty(index));
  }

  clearActiveProperty() {
    this.store.dispatch(factory => factory.contacts.clearActiveProperty());
  }

  ionViewDidLoad() {
    this.loadAccountContacts();
  }

}
