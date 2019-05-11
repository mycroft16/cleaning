import { Injectable } from '@angular/core'

import { ApiService } from '../api/api.service'
import { Observable } from 'rxjs'
import { IProperty } from '../../shared/interfaces/property.interface'

@Injectable()
export class PropertiesService {
    constructor(private apiService: ApiService) { }

    public loadProperties(): Observable<IProperty[]> {
        return this.apiService.get(
            'Account/AccountProperties',
            {
                params: { },
                loadingIndicator: true
            }
        );
    }
}