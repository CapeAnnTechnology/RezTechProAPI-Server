import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoorComponent } from './door/door.component';
import { DoorDetailComponent } from './door-detail/door-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DoorComponent, DoorDetailComponent]
})
export class DoorModule { }
