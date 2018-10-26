import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoorDetailComponent } from './door-detail.component';

describe('DoorDetailComponent', () => {
  let component: DoorDetailComponent;
  let fixture: ComponentFixture<DoorDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoorDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
