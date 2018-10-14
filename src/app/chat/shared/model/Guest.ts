import {User} from './user';
import {Action} from './action';

export interface Guest {
    from?: User;
    action?: Action;
}
