import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { IClient } from '../models/client.model';

export const GET_CONTACTS = '[CONTACTS] Get';

export class GetContacts implements Action {
    readonly type = GET_CONTACTS;

    constructor(public payload: string) {}
}

export type Actions = GetContacts;