import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared';
import { SocketService } from './../shared/_services';

import { RouterModule } from '@angular/router';
import { ROOM_ROUTES } from './_routes/room.routes';

import { RoomComponent } from './room.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(ROOM_ROUTES),
  ],
  declarations: [RoomComponent, RoomDetailComponent]
})
export class RoomModule { }
