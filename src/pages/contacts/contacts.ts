import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs'
import { AppStore } from '../../app/store/app.store'
import { IProperty } from '../../app/shared/interfaces/property.interface';

@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html'
})
export class ContactsPage {

  public contacts: Observable<IProperty[]>;

  constructor(private navCtrl: NavController, private store: AppStore) {
    this.contacts = this.store.select(state => state.contacts.list);
  }

  loadAccountContacts() {
    this.store.dispatch(factory => factory.contacts.loadContacts(1, 1));  
  }

  ionViewDidEnter() {
    this.loadAccountContacts();
  }

}
