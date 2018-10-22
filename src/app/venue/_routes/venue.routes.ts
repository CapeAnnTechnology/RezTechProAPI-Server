import { Routes } from '@angular/router';
import { VenueComponent } from './../venue.component';
import { VenueDetailComponent } from './../venue-detail/venue-detail.component';

export const VENUE_ROUTES: Routes = [
  {
    path: '',
    component: VenueComponent,
  },
  {
    path: ':id',
    component: VenueDetailComponent,
  }
];
