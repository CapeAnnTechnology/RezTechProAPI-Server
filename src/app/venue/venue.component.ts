import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { VenueModel } from './_models/venue.model';

// import { LoadingComponent } from './../shared';

const VENUE_DATA: VenueModel[] = [
  { _id: '5b300cb47039f3f8514d3e42', name: 'Nic\'s Pool Hall',  rooms: 1 },
  { _id: '5b300c767039f3f8514d3cbe', name: 'Sals Pub', rooms: 3 },
  { _id: '5b33cc377039f3f85161a2c1', name: 'Patty\'s Dance Club', rooms: 2 },
];


@Component({
  selector: 'rez-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.scss']
})
export class VenueComponent implements OnInit {
  displayedColumns: string[] = ['name', 'rooms', 'buttons'];
  dataSource = VENUE_DATA;
  pageTitle = 'Venues';

  constructor(
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle(this.pageTitle);
  }

  onClick( id ) {
    console.log( id );
  }

}
