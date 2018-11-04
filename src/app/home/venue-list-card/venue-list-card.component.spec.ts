import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueListCardComponent } from './venue-list-card.component';

describe('VenueListCardComponent', () => {
  let component: VenueListCardComponent;
  let fixture: ComponentFixture<VenueListCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenueListCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
