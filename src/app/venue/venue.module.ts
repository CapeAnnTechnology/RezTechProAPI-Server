import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared';
import { SocketService } from './../shared/_services';

import { RouterModule } from '@angular/router';
import { VENUE_ROUTES } from './_routes/venue.routes';

import { VenueComponent } from './venue.component';
import { VenueDetailComponent } from './venue-detail/venue-detail.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(VENUE_ROUTES),
  ],
  providers: [SocketService],
  declarations: [
    VenueComponent,
    VenueDetailComponent
  ]
})
export class VenueModule { }
