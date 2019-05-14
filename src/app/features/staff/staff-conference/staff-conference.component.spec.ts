import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffConferenceComponent } from './staff-conference.component';

describe('StaffConferenceComponent', () => {
  let component: StaffConferenceComponent;
  let fixture: ComponentFixture<StaffConferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffConferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffConferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
