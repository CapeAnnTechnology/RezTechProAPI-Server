import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomDoorsComponent } from './room-doors.component';

describe('RoomDoorsComponent', () => {
  let component: RoomDoorsComponent;
  let fixture: ComponentFixture<RoomDoorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomDoorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomDoorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
