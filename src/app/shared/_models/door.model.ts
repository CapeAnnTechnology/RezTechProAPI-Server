import { RoomModel } from './room.model';

export interface DoorModel {
   _id: string;
   roomId: RoomModel;
   title: string;
}

//  {
// "_id": "5bde20051b4214407628d406",
// "roomId": "5bce1a3f1b42144076b851c6",
// "title": "Blue Door"
// }
