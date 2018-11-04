import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './../shared';
import { SocketService, UtilsService } from './../shared/_services';

import { DoorComponent } from './door.component';
import { DoorDetailComponent } from './door-detail/door-detail.component';

import { RouterModule } from '@angular/router';
import { DOOR_ROUTES } from './_routes/door.routes';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DOOR_ROUTES),
    SharedModule,
  ],
  declarations: [DoorComponent, DoorDetailComponent]
})
export class DoorModule { }
