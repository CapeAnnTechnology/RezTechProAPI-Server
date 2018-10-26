import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { AuthService } from './../shared/_services';

@Component({
  selector: 'rez-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pageTitle = 'Dashboard';

  constructor( private title: Title, public auth: AuthService ) { }

  ngOnInit() {
    this.title.setTitle(this.pageTitle);
  }

}
