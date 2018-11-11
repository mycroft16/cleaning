import { Injectable } from '@angular/core'

import { ApiService } from '../api/api.service'
import { Observable } from 'rxjs'
import { INotification } from '../../shared/interfaces/notification.interface'

@Injectable()
export class NotificationsService {
    constructor(private apiService: ApiService) { }

    public loadNotifications(accountId: number, userId: number): Observable<INotification[]> {
        return this.apiService.get(
            'Notifications',
            'UserNotifications',
            {
                params: { accountId: accountId, userId: userId },
                loadingIndicator: false
            }
        );
    }
}