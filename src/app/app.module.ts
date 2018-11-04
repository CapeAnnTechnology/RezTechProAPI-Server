import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './shared/material/material.module';

import { AuthService } from './shared/_services';

import { VenueService } from './venue/_services/venue.service';

import { ChatModule } from './chat/chat.module';
import { CapacityModule } from './capacity/capacity.module';
// import { VenueModule } from './venue/venue.module';
// import { VenueComponent } from './venue/venue.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomeComponent } from './home/home.component';
import { ReportComponent } from './report/report.component';
import { LogComponent } from './log/log.component';

import { NgxChartsModule } from '@swimlane/ngx-charts';
// import { LoadingComponent } from './shared/loading.component';
import { CallbackComponent } from './pages/callback/callback.component';
import { HelpComponent } from './pages/help/help.component';

import { HttpClientModule } from '@angular/common/http';
import { VenueListComponent } from './home/venue-list/venue-list.component';
import { VenueListCardComponent } from './home/venue-list-card/venue-list-card.component';
import { RoomListCardComponent } from './home/room-list-card/room-list-card.component';
import { BusinessListCardComponent } from './home/business-list-card/business-list-card.component';
import { BusinessListComponent } from './home/business-list/business-list.component';

// import { LoadingComponent } from './shared/loading.component';

@NgModule({
  declarations: [
    // LoadingComponent,
    // VenueComponent
    AppComponent,
    CallbackComponent,
    FooterComponent,
    HeaderComponent,
    HelpComponent,
    HomeComponent,
    LogComponent,
    ReportComponent,
    SidenavComponent,
    ToolbarComponent,
    VenueListComponent,
    VenueListCardComponent,
    RoomListCardComponent,
    BusinessListCardComponent,
    BusinessListComponent
  ],
  imports: [
    // VenueModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CapacityModule,
    ChatModule,
    HttpClientModule,
    MaterialModule,
    NgxChartsModule,
    SharedModule,
  ],
  providers: [Title, AuthService, VenueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
