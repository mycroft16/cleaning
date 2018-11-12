import { DateTime } from "ionic-angular";

export interface IUser {
    id: number;
    account: number;
    firstName: string;
    lastName: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    zip: number;
    phoneMobile: number;
    phoneHome: number;
    phoneOther: number;
    emailAddress: string;
    password: string;
    role: number;
    addedOn: DateTime;
    addedBy: number;
    status: number;
}

export interface IAuthToken {
    token: string;
}