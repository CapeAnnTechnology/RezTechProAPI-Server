import { Component, OnInit, Input } from '@angular/core';

import { EventModel, UserModel, ActionModel, MessageModel } from './../../shared/_models';

import { SocketService } from './../../shared/_services';

export interface Room {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'rez-capacity-room',
  templateUrl: './capacity-room.component.html',
  styleUrls: ['./capacity-room.component.scss']
})
export class CapacityRoomComponent implements OnInit {
  @Input() room: string;

  ioConnection: any;
  user: UserModel;
  messages: MessageModel[] = [];

  constructor(private socketService: SocketService) { }

  ngOnInit() {
    this.initIoConnection();
  }

  private initIoConnection(): void {
    this.socketService.initSocket();

    this.ioConnection = this.socketService.onMessage()
      .subscribe((message: MessageModel) => {
        this.messages.push(message);
      });


    this.socketService.onEvent(EventModel.CONNECT)
      .subscribe(() => {
        console.log('connected');
      });

    this.socketService.onEvent(EventModel.DISCONNECT)
      .subscribe(() => {
        console.log('disconnected');
      });
  }

}
