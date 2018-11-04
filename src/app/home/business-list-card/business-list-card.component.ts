import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rez-business-list-card',
  templateUrl: './business-list-card.component.html',
  styleUrls: ['./business-list-card.component.scss']
})
export class BusinessListCardComponent implements OnInit {

  constructor() { }
  @Input() groups: any[] = [];

  ngOnInit() {
  }

}
