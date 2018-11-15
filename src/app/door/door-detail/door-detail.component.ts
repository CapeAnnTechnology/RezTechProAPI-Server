import { Component, OnInit, OnDestroy } from '@angular/core';

import { DoorService } from './../_services/door.service';
import { SocketService, UtilsService } from './../../shared/_services';

import { Subscription } from 'rxjs';

import { RoomModel } from './../../shared/_models/room.model';
import { DoorModel } from './../../shared/_models/door.model';

import { ActionModel, EventModel, MessageModel, UserModel } from './../../shared/_models';

import { ActivatedRoute } from '@angular/router';

import { AuthService } from './../../shared/_services';

@Component({
  selector: 'rez-door-detail',
  templateUrl: './door-detail.component.html',
  styleUrls: ['./door-detail.component.scss']
})
export class DoorDetailComponent implements OnInit, OnDestroy {

  pageTitle = 'Door';
  doorSub: Subscription;
  routeSub: Subscription;
  id: string;
  loading: boolean;
  error: boolean;
  door: DoorModel;

  capacity = 0;
  occupancy: number;
  progress = 0;

  ioConnection: any;

  constructor(
  	private doorService: DoorService,
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
        // console.log( room );
        // console.log( this.door.roomId );
        // this.room.capacity = room.capacity;
        if ( this.door.roomId._id === room._id ) {
          this.door.roomId.occupancy = parseInt( '' + room.occupancy, 10 );
          const progress = ( this.door.roomId.occupancy / this.door.roomId.capacity );
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
        this._getDoor();
      });
  }

  private _getDoor() {
    this.loading = true;
    // GET event by ID
    this.doorSub = this.doorService
      .getDoorById$(this.id)
      .subscribe(
        res => {
          this.door = res;
          // console.log(this.door);
          this.loading = false;
          this.pageTitle = res.title + " Door";
          this.progress = res.roomId.progress;
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
      roomId: this.door.roomId._id,
      capacity: Math.floor(this.capacity),
      action: ActionModel.ENTER
    });
  }

  public sendGuestExit(): void {
    this.socketService.guest({
      roomId: this.door.roomId._id,
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
    this.doorSub.unsubscribe();
  }

}
