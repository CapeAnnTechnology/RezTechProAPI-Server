import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { SharedModule } from './../shared';
import { SocketService, UtilsService } from './../shared/_services';

import { VenueService } from './_services/venue.service';

import { RouterModule } from '@angular/router';
import { VENUE_ROUTES } from './_routes/venue.routes';

import { VenueComponent } from './venue.component';
import { VenueDetailComponent } from './venue-detail/venue-detail.component';
import { VenueRoomsComponent } from './venue-rooms/venue-rooms.component';

import { HttpClientModule } from '@angular/common/http';
import { VenueAddComponent } from './venue-add/venue-add.component';

// import { LoadingComponent } from './../shared/loading.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(VENUE_ROUTES),
    SharedModule,
  ],
  providers: [
    SocketService,
    Title,
    UtilsService,
    VenueService,
  ],
  declarations: [
    VenueComponent,
    VenueDetailComponent,
    VenueRoomsComponent,
    VenueAddComponent,
    // LoadingComponent
  ]
})
export class VenueModule { }
