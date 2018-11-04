import { IClient } from './client.model'
import { IPet } from './pet.model'

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