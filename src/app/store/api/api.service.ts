import 'rxjs/add/operator/do'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { ApiOptions } from '../../shared/interfaces/api.interface'
import { AppStore } from '../app.store'
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable()
export class ApiService {
    constructor(private http: HttpClient, private store: AppStore) {

    }

    public get(controller: string, options: ApiOptions = {}): Observable<any> {
        return this.call('GET', controller, options);
    }

    public post(controller: string, options: ApiOptions = {}): Observable<any> {
        return this.call('POST', controller, options);
    }

    public put(controller: string, options: ApiOptions = {}): Observable<any> {
        return this.call('PUT', controller, options);
    }

    public delete(controller: string, options: ApiOptions = {}): Observable<any> {
        return this.call('DELETE', controller, options);
    }

    //// END PUBLIC INTERFACE

    private call(method: 'GET' | 'POST' | 'PUT' | 'DELETE', controller: string, options: ApiOptions): Observable<any> {
        const selectedOptions: ApiOptions = this.combineDefaultOptionsWith(options);
        const requestOptions = {
            params: selectedOptions.params,
            body: selectedOptions.body,
            headers: selectedOptions.headers
        };
        this.showLoadingIndicatorDependingOn(selectedOptions);

        return this.http.request(method, this.urlFor(controller), requestOptions)
            .do(
                () => this.hideLoadingIndicatorDependingOn(selectedOptions),
                () => this.showLoadingIndicatorDependingOn(selectedOptions)
            );
    }

    private combineDefaultOptionsWith(options: ApiOptions): ApiOptions {
        return { params: {}, body: null, loadingIndicator: false, headers: this.headers(options.headerType), ...options };
    }

    private showLoadingIndicatorDependingOn(options: ApiOptions): void {
        if (options.loadingIndicator === 'onBeforeRequest' || options.loadingIndicator === true) {
            this.store.dispatch(factory => factory.loadingIndicator.show());
        }
    }

    private hideLoadingIndicatorDependingOn(options: ApiOptions): void {
        if (options.loadingIndicator === 'offAfterResponse' || options.loadingIndicator === true) {
            this.store.dispatch(factory => factory.loadingIndicator.hide());
        }
    }

    private urlFor(controller: string) {
        return `http://cleaning.wherearethelights.com/api/${controller}.php`;
    }

    private headers(headerType: string = 'json'): HttpHeaders {
        let token: string = '';
        token = this.store.snapshot(state => state.user.authToken);
        let headers = new HttpHeaders();
        headers = headers.set('Accept', 'application/json');

        if (!!token) {
            headers = headers.set('Authorization', token);
        }

        switch (headerType) {
        case 'json':
            headers = headers.set('Content-Type', 'application/json');
            headers = headers.set('Accept', 'application/json');
            break;
        case 'download':
            headers = headers.set('Accept', 'application/octet-stream');
            break;
        case 'form-urlencoded':
            headers = headers.set('Accept', 'application/json');
            headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
            break;
        case 'text':
            headers = headers.set('Content-Type', 'text/plain');
            break;
        default:
            headers = headers.set('Accept', 'application/json');
            break;
        }

        return headers;
    }
}