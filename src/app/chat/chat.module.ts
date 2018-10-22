import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from './../shared';
import { SocketService } from './../shared/_services';

import { ChatComponent } from './chat.component';
import { DialogUserComponent } from './dialog-user/dialog-user.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [ChatComponent, DialogUserComponent],
  providers: [SocketService],
  entryComponents: [DialogUserComponent]
})
export class ChatModule { }
