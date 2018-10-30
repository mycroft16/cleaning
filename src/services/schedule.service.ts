import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()

export class ScheduleService {

    apiUrl = '';

    constructor(private http: HttpClient) {

    }

    // build auth header here

    readScheduleByDate(date) {

    }

}