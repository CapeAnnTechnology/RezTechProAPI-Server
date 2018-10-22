import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared';
import { SocketService } from './../shared/_services';


import { CapacityComponent } from './capacity.component';
import { CapacityRoomComponent } from './capacity-room/capacity-room.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [SocketService],
  declarations: [CapacityComponent, CapacityRoomComponent]
})
export class CapacityModule { }
