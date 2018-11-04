import { Component, OnInit } from '@angular/core';

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
export class DoorDetailComponent implements OnInit {

  pageTitle = 'Door';
  doorSub: Subscription;
  routeSub: Subscription;
  id: string;
  loading: boolean;
  error: boolean;
  door: DoorModel;

  ioConnection: any;

  constructor(
  	private doorService: DoorService,
    private route: ActivatedRoute,
    private socketService: SocketService,
    public auth: AuthService,
    public utils: UtilsService,
    ) { }

  ngOnInit() {
  }

}
