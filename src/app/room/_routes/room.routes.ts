import { Routes } from '@angular/router';
import { RoomComponent } from './../room.component';
import { RoomDetailComponent } from './../room-detail/room-detail.component';
import { RoomDoorsComponent } from './../room-doors/room-doors.component';

export const ROOM_ROUTES: Routes = [
  {
    path: '',
    component: RoomComponent,
  },
  {
    path: ':id',
    component: RoomDetailComponent,
  },
  {
    path: ':id/doors',
    component: RoomDoorsComponent,
  }
];
