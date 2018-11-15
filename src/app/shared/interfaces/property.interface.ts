import { IClient } from './client.interface'
import { IPet } from './pet.interface'

export interface IProperty {
    id: number;
    account: number;
    user: number;
    propertyName: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    zip: number;
    primaryContact: IClient;
    secondaryContact: IClient;
    people: IClient[];
    pets: IPet[];
}