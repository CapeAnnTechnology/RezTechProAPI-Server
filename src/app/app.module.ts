import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './shared/material/material.module';

import { AuthService } from './shared/_services';

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

// import { LoadingComponent } from './shared/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    ToolbarComponent,
    HomeComponent,
    ReportComponent,
    LogComponent,
    // LoadingComponent,
    CallbackComponent,
    HelpComponent,
    // VenueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialModule,
    ChatModule,
    CapacityModule,
    // VenueModule,
    NgxChartsModule
  ],
  providers: [Title, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
