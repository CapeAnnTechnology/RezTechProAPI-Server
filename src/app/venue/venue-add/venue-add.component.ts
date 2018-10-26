import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'rez-venue-add',
  templateUrl: './venue-add.component.html',
  styleUrls: ['./venue-add.component.scss']
})
export class VenueAddComponent implements OnInit {
  pageTitle = 'Add New Venue';

  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle( this.pageTitle );
  }

}
