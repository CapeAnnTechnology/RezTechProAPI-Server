import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomListCardComponent } from './room-list-card.component';

describe('RoomListCardComponent', () => {
  let component: RoomListCardComponent;
  let fixture: ComponentFixture<RoomListCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomListCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
