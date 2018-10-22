import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapacityRoomComponent } from './capacity-room.component';

describe('CapacityRoomComponent', () => {
  let component: CapacityRoomComponent;
  let fixture: ComponentFixture<CapacityRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapacityRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapacityRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
