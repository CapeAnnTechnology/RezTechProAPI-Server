import {UserModel} from './user.model';
import {ActionModel} from './action.model';

export interface GuestModel {
    from?: UserModel;
    action?: ActionModel;
}
