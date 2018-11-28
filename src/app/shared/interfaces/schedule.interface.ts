export interface ISchedule {
    id: number;
    property: number;
    accountUser: number; // change this to IUser in future
    start: string;
    end: string;
    status: 'Scheduled' | 'In-Progress' | 'Completed' | 'Cancelled' | 'Missed';
}