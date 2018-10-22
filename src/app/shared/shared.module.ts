import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule
  ],
  providers: [],
  declarations: []
})
export class SharedModule { }
