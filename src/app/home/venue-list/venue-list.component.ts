import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { VenueModel } from './../../venue/_models/venue.model';

import { VenueService } from './../../venue/_services/venue.service';

@Component({
  selector: 'rez-venue-list',
  templateUrl: './venue-list.component.html',
  styleUrls: ['./venue-list.component.scss']
})
export class VenueListComponent implements OnInit, OnDestroy {
  @Input() groups: any[] = [];
  venues: VenueModel[] = [];
  ids: string[] = [];
  venuesSub: Subscription;
  routeSub: Subscription;
  loading: boolean;
  error: boolean;


  constructor(
    private route: ActivatedRoute,
    private venueService: VenueService,
    ) { }

  ngOnInit() {
    this._routeSubs();
  }

  private _routeSubs() {
    // Set room ID from route params and subscribe
    this.routeSub = this.route.params
      .subscribe(params => {
        this._getVenues();
      });
  }

  private _getVenues() {
    this.loading = true;
    // POST venues by IDs
    this.groups.forEach((id)=> {
      this.ids.push(id);
    });
    this.venuesSub = this.venueService
      .getVenuesByIds$(this.ids)
      .subscribe(
        res => {
          // console.log(res);
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

   ngOnDestroy() {
    this.venuesSub.unsubscribe();
    this.routeSub.unsubscribe();
  }

}
