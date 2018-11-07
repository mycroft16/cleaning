import { IClient } from './client.interface'
import { IPet } from './pet.interface'

export interface IProperty {
    id: number;
    account: number;
    propertyName: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    zip: number;
    primaryContact: number;
    secondaryContact: number;
    people: IClient[];
    pets: IPet[];
}