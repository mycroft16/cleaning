import { Injectable } from '@angular/core'

import { ApiService } from '../api/api.service'
import { Observable } from 'rxjs'
import { IProperty } from '../../../models/property.model'

@Injectable()
export class ContactsService {
    constructor(private apiService: ApiService) { }

    public loadContacts(accountId: number, userId: number): Observable<IProperty[]> {
        return this.apiService.get(
            'Account',
            'AccountProperties',
            {
                params: { accountId: accountId, userId: userId },
                loadingIndicator: true
            }
        );
    }
}