import { Injectable } from '@angular/core'

import { ApiService } from '../api/api.service'
import { Observable } from 'rxjs'
import { AppStore } from '../app.store'
import { IUser } from '../../shared/interfaces/user.interface'

@Injectable()
export class UserService {
    constructor(private apiService: ApiService, private store: AppStore) { }

    public getAuthToken(username: string, password: string): Observable<string> {
        return this.apiService.get(
            'User',
            'GetAuthToken',
            {
                params: { username: username, password: password },
                loadingIndicator: false
            }
        );
    }

    public loadUser(): Observable<IUser> {
        return this.apiService.get(
            'User',
            'LoadUser',
            {
                params: { },
                loadingIndicator: true
            }
        );
    }
}