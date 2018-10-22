import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Input()  opened: boolean;
  @Output() toggled = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.toggled.emit();
  }
}
