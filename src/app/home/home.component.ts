import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

import { AuthService } from './../shared/_services';

import { VenueModel } from './../venue/_models/venue.model';

import { VenueService } from './../venue/_services/venue.service';

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'rez-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pageTitle = 'Dashboard';
  venues: VenueModel[] = [];
  ids: string[] = [];
  venuesSub: Subscription;
  routeSub: Subscription;
  loading: boolean;
  error: boolean;

  constructor(
    private title: Title,
    public auth: AuthService,
    private route: ActivatedRoute,
    private venueService: VenueService,
   ) { }

  ngOnInit() {
    this.title.setTitle(this.pageTitle);
  }

}
