import { Routes } from '@angular/router';
import { DoorComponent } from './../door.component';
import { DoorDetailComponent } from './../door-detail/door-detail.component';
// import { RoomDoorsComponent } from './../room-doors/room-doors.component';

export const DOOR_ROUTES: Routes = [
  {
    path: '',
    component: DoorComponent,
  },
  {
    path: ':id',
    component: DoorDetailComponent,
  },
];
