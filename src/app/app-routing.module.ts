import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';
import { CapacityComponent } from './capacity/capacity.component';
import { ReportComponent } from './report/report.component';
import { LogComponent } from './log/log.component';

// import { VenueModule } from './venue/venue.module';
// import { VenueComponent } from './venue/venue.component';

const appRoutes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'venue',
    loadChildren: './venue/venue.module#VenueModule',
    // canActivate: []
  },
  {
    path: 'room',
    loadChildren: './room/room.module#RoomModule',
    // canActivate: []
  },
  // {
  //   path: 'venue', component: VenueComponent
  // },
  {
    path: 'capacity', component: CapacityComponent
  },
  {
    path: 'chat', component: ChatComponent,
  },
  {
    path: 'report', component: ReportComponent,
  },
  {
    path: 'log', component: LogComponent,
  },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const AppRoutingModule = RouterModule.forRoot(appRoutes);
