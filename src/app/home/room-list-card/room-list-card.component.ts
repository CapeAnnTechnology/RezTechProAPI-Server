import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { BusinessModel } from './../../shared/_models/business.model';
import { VenueModel } from './../../shared/_models/venue.model';
import { RoomModel } from './../../shared/_models/room.model';
import { DoorModel } from './../../shared/_models/door.model';

import { VenueService } from './../../venue/_services/venue.service';

@Component({
  selector: 'rez-room-list-card',
  templateUrl: './room-list-card.component.html',
  styleUrls: ['./room-list-card.component.scss']
})
export class RoomListCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
