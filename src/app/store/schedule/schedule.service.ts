import { Injectable } from '@angular/core'

import { ApiService } from '../api/api.service'
import { Observable } from 'rxjs'
import { ISchedule } from '../../shared/interfaces/schedule.interface'
import { IReview } from '../../shared/interfaces/review.interface'

@Injectable()
export class ScheduleService {
    constructor(private apiService: ApiService) { }

    public loadSchedule(accountId: number, userId: number, date: string): Observable<ISchedule[]> {
        return this.apiService.get(
            'Schedule/LoadSchedule',
            {
                params: { accountId: accountId, userId: userId, date: date },
                loadingIndicator: false
            }
        );
    }

    public loadScheduleReviews(scheduleId: number): Observable<IReview[]> {
        return this.apiService.get(
          'Schedule/Reviews',
          {
              params: { scheduleId: scheduleId },
              loadingIndicator: false
          }  
        );
    }
}