import {ActionModel} from './action.model';

export interface GuestModel {
    doorId: String;
    roomId: String;
    capacity: number;
    action?: ActionModel;
}
