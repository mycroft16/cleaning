import { IClient } from './client.interface'
import { IPet } from './pet.interface'

export interface IRoomStep {
    id: number;
    room: number;
    sortOrder: number;
    stepText: string;
}

export interface IRoom {
    id: number;
    property: number;
    sortOrder: number;
    roomName: string;
    steps: IRoomStep[];
}

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
    rooms: IRoom[];
    primaryContact: IClient;
    secondaryContact: IClient;
    people: IClient[];
    pets: IPet[];
}