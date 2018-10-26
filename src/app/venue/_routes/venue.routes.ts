import { Routes } from '@angular/router';
import { VenueComponent } from './../venue.component';
import { VenueDetailComponent } from './../venue-detail/venue-detail.component';
import { VenueRoomsComponent } from './../venue-rooms/venue-rooms.component';
import { VenueAddComponent } from './../venue-add/venue-add.component';

import { AuthGuard } from './../../shared/auth/auth.guard';
import { AdminGuard } from './../../shared/auth/admin.guard';


export const VENUE_ROUTES: Routes = [
  {
    path: '',
    component: VenueComponent,
  },
  {
    path: 'add',
    component: VenueAddComponent,
    canActivate: [
      AuthGuard,
      AdminGuard,
    ],
  },
  {
    path: ':id/rooms',
    component: VenueRoomsComponent,
  },
  {
    path: ':id',
    component: VenueDetailComponent,
  },
];
