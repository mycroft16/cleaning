import { Component } from '@angular/core'
import { LoadingController } from 'ionic-angular'
import { AppStore } from '../../app/store/app.store'

@Component({
    selector: 'c-loading-indicator',
    template: ''
})

export class CLoadingIndicator {

    private loading: any = null;
    
    constructor(
        public loadingController: LoadingController,
        public store: AppStore ) {
            store.select(state => state.loadingIndicator).subscribe(state => {
                (state.show) ? this.showLoading(): this.hideLoading();
            });
    }

    public showLoading() {
        if (!this.loading) {
            this.loading = this.loadingController.create({
                spinner: 'hide',
                content: `
                <div class="loading">
                    <div class="loadingCircle">
                        <img src="assets/icon/eclipse.svg" />
                    </div>
                </div>
                `
            });
            this.loading.present();
        }
    }

    public hideLoading() {
        if (this.loading) {
            this.loading.dismiss();
            this.loading = null;
        }
    }

}