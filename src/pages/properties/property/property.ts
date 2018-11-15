import { Component, ChangeDetectionStrategy } from '@angular/core'
import { NavController, ViewController } from 'ionic-angular'
import { AppStore } from '../../../app/store/app.store'
import { IProperty } from '../../../app/shared/interfaces/property.interface'

@Component({
    selector: 'page-property',
    template: 'property.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class PropertyPage {
    public property: IProperty;

    constructor(/*private navCtrl: NavController, */private store: AppStore, private viewCtrl: ViewController) {

    }

    ionViewDidLoad() {
        this.property = this.store.snapshot(factory => factory.properties.activeProperty);
    }

}