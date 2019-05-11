export interface IAccount {
    id: number;
    accountName: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    zip: number;
    contactFirstName: string;
    contactLastName: string;
    phoneWork: number;
    phoneMobile: number;
    phoneHome: number;
    fax: number;
    emailAddress: string;
    plan: number;
    billingDate: Date;
    tempBillingDate: Date;
    status: number;
}