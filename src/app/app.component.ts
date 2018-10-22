import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  opened: boolean;

  ngOnInit(): void {
  }

  private initModel(): void {
  }

  onToggle( toggle: boolean ) {
    console.log( 'Toggle Sidenav' );
    this.opened = !this.opened;
  }
}
