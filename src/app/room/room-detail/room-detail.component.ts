import { Component, OnInit, OnDestroy } from '@angular/core';

import { RoomService } from './../_services/room.service';
import { SocketService, UtilsService } from './../../shared/_services';

import { Subscription } from 'rxjs';

import { RoomModel } from './../../shared/_models/room.model';

import { ActionModel, EventModel, MessageModel, UserModel } from './../../shared/_models';

import { ActivatedRoute } from '@angular/router';

import { AuthService } from './../../shared/_services';

@Component({
  selector: 'rez-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.scss']
})
export class RoomDetailComponent implements OnInit, OnDestroy {
  pageTitle = 'Room';
  roomSub: Subscription;
  routeSub: Subscription;
  room: RoomModel;
  id: string;
  capacity = 0;
  occupancy: number;
  progress = 0;
  loading: boolean;
  error: boolean;

  ioConnection: any;

  constructor(
    private roomService: RoomService,
    private route: ActivatedRoute,
    private socketService: SocketService,
    public auth: AuthService,
    public utils: UtilsService,
  ) { }

  ngOnInit() {
    this._routeSubs();
    this.initIoConnection();
  }

  private initIoConnection(): void {
    this.socketService.initSocket();

    // this.ioConnection = this.socketService.onMessage()
    //   .subscribe((message: MessageModel) => {
    //     this.messages.push(message);
    //   });

    this.ioConnection = this.socketService.onRoom()
      .subscribe((room: RoomModel) => {
        // this.messages.push(message);
        // console.log(room);
        // this.room.capacity = room.capacity;
        if ( this.id === room._id ) {
          this.room.occupancy = parseInt( '' + room.occupancy, 10 );
          const progress = ( this.room.occupancy / this.room.capacity );
          this.progress = Math.floor( 100.0 * progress );
        }
        // console.log(this.room);
        // console.log(this.progress);
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

  private _routeSubs() {
    // Set room ID from route params and subscribe
    this.routeSub = this.route.params
      .subscribe(params => {
        this.id = params['id'];
        this._getRoom();
      });
  }

  private _getRoom() {
    this.loading = true;
    // GET event by ID
    this.roomSub = this.roomService
      .getRoomById$(this.id)
      .subscribe(
        res => {
          this.room = res;
          this.pageTitle = this.room.title;
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

  public sendGuestEnter(): void {
    this.socketService.guest({
      doorId: this.id,
      roomId: this.id,
      capacity: Math.floor(this.capacity),
      action: ActionModel.ENTER
    });
  }

  public sendGuestExit(): void {
    this.socketService.guest({
      doorId: this.id,
      roomId: this.id,
      capacity: Math.floor(this.capacity),
      action: ActionModel.EXIT
    });
  }

  public progressColor( progress ) {
    if ( 100 < progress ) {
      return 'warn';
    }
    // return 'accent';
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
    this.roomSub.unsubscribe();
  }

}
