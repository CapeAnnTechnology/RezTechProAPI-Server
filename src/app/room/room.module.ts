import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { SharedModule } from './../shared';
import { SocketService, UtilsService } from './../shared/_services';

import { RoomService } from './_services/room.service';
// import { DoorService } from './_services/door.service';

import { RouterModule } from '@angular/router';
import { ROOM_ROUTES } from './_routes/room.routes';

import { RoomComponent } from './room.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';

import { HttpClientModule } from '@angular/common/http';
import { RoomDoorsComponent } from './room-doors/room-doors.component';

// import { LoadingComponent } from './../shared/loading.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    RouterModule.forChild(ROOM_ROUTES),
  ],
  providers: [ RoomService, UtilsService ],
  declarations: [
    RoomComponent,
    RoomDetailComponent,
    RoomDoorsComponent,
    // LoadingComponent,
  ]
})
export class RoomModule { }
