import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

import { VenueModel } from './_models/venue.model';

import { VenueService } from './_services/venue.service';

import { AuthService } from './../shared/_services';

@Component({
  selector: 'rez-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.scss']
})
export class VenueComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['name', 'buttons']; // 'rooms',
  pageTitle = 'Venues';
  venuesSub: Subscription;
  ids: string[] = [];
  loading: boolean;
  error: boolean;
  venues: VenueModel[] = [];

  constructor(
    private title: Title,
    private venueService: VenueService,
    public auth: AuthService,
  ) { }

  ngOnInit() {
    this.title.setTitle(this.pageTitle);
    // this._routeSubs();
    this._getVenues();
  }

  private _getVenues() {
    this.loading = true;
    // GET event by ID
    // console.log(this.auth.groups);
    this.auth.groups.forEach((id)=> {
      // if ( ObjectId.isValid(id) ) {
      this.ids.push(id);
      // }
    });
    // console.log(this.ids);

    this.venuesSub = this.venueService
      .getVenuesByIds$(this.ids)
      .subscribe(
        res => {
          this.venues = res;
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

  onClick( id ) {
    console.log( id );
  }

  ngOnDestroy() {
    this.venuesSub.unsubscribe();
  }

}
