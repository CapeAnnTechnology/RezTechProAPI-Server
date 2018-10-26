import { Component, OnInit } from '@angular/core';

import { MatSelectModule } from '@angular/material';

export interface Room {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'rez-capacity',
  templateUrl: './capacity.component.html',
  styleUrls: ['./capacity.component.scss']
})
export class CapacityComponent implements OnInit {
  selected = '';
  rooms: Room[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
