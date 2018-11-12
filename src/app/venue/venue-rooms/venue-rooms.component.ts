import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { VenueService } from './../_services/venue.service';
import { SocketService, UtilsService } from './../../shared/_services';

import { Subscription } from 'rxjs';

import { RoomModel } from './../../shared/_models/room.model';

import { ActionModel, EventModel, MessageModel, UserModel } from './../../shared/_models';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'rez-venue-rooms',
  templateUrl: './venue-rooms.component.html',
  styleUrls: ['./venue-rooms.component.scss']
})
export class VenueRoomsComponent implements OnInit, OnDestroy {
  pageTitle = 'Rooms';
  roomsSub: Subscription;
  routeSub: Subscription;
  id: string;
  loading: boolean;
  error: boolean;
  rooms: RoomModel[];

  ioConnection: any;


  constructor( private route: ActivatedRoute,
    public utils: UtilsService,
    private socketService: SocketService,
    private venueService: VenueService,
    private title: Title
    ) { }

  ngOnInit() {
    this.title.setTitle( this.pageTitle );
    this._routeSubs();
    // this.initIoConnection();
  }

  private _routeSubs() {
    // Set room ID from route params and subscribe
    this.routeSub = this.route.params
      .subscribe(params => {
        this.id = params['id'];
        this._getRooms();
      });
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
        // this.room.occupancy = parseInt(""+room.occupancy);
        // let progress = (this.room.occupancy/this.room.capacity);
        // this.progress = Math.floor(100.0*(progress));
        // console.log(room);
        // console.log(this.rooms);
        const objIndex = this.rooms.findIndex(( obj => obj._id === room._id ));
        if ( undefined !== objIndex ) {
          this.rooms[objIndex].occupancy = room.occupancy;
          let progress = ( this.rooms[objIndex].occupancy / this.rooms[objIndex].capacity );
          progress = Math.floor( 100.0 * ( progress ) );
          this.rooms[objIndex].progress = progress;
        }
        // console.log(this.rooms);
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

  private _getRooms() {
    this.loading = true;
    // GET event by ID
    this.roomsSub = this.venueService
      .getRoomsByVenueId$(this.id)
      .subscribe(
        res => {
          this.rooms = res;
          // console.log(this.rooms[0].doors);
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
    this.roomsSub.unsubscribe();
  }

}
