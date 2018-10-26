import { Component, OnInit, OnDestroy } from '@angular/core';

import { RoomService } from './../_services/room.service';
import { DoorService } from './../_services/door.service';
import { SocketService, UtilsService } from './../../shared/_services';

import { Title } from '@angular/platform-browser';

import { Subscription } from 'rxjs';

import { RoomModel } from './../_models/room.model';
import { DoorModel } from './../_models/door.model';

import { ActionModel, EventModel, MessageModel, UserModel } from './../../shared/_models';

import { ActivatedRoute } from '@angular/router';

import { AuthService } from './../../shared/_services';

@Component({
  selector: 'rez-room-doors',
  templateUrl: './room-doors.component.html',
  styleUrls: ['./room-doors.component.scss']
})
export class RoomDoorsComponent implements OnInit, OnDestroy {
  pageTitle = 'Doors';
  doorsSub: Subscription;
  routeSub: Subscription;
  id: string;
  loading: boolean;
  error: boolean;
  doors: DoorModel[];

  ioConnection: any;


  constructor(
    private doorService: DoorService,
    private roomService: RoomService,
    private route: ActivatedRoute,
    private socketService: SocketService,
    private title: Title,
    public auth: AuthService,
    public utils: UtilsService,
  ) { }

  ngOnInit() {
    this.title.setTitle(this.pageTitle);
    this._routeSubs();
    this.initIoConnection();
  }

  private _routeSubs() {
    // Set room ID from route params and subscribe
    this.routeSub = this.route.params
      .subscribe(params => {
        this.id = params['id'];
        this._getDoors();
      });
  }

  private initIoConnection(): void {
    this.socketService.initSocket();

    this.socketService.onEvent(EventModel.CONNECT)
      .subscribe(() => {
        console.log('connected');
      });

    this.socketService.onEvent(EventModel.DISCONNECT)
      .subscribe(() => {
        console.log('disconnected');
      });
  }

  private _getDoors() {
    this.loading = true;
    // GET event by ID
    this.doorsSub = this.doorService
      .getDoorsByRoomId$(this.id)
      .subscribe(
        res => {
          this.doors = res;
          this.loading = false;
          // this.eventPast = this.utils.eventPast(this.event.endDatetime);
        },
        err => {
          console.error(err);
          this.loading = false;
          this.error = true;
          // this._setPageTitle('Event Details');
        }
      );
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
    this.doorsSub.unsubscribe();
  }

}
