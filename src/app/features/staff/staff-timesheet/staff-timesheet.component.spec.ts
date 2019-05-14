import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffTimesheetComponent } from './staff-timesheet.component';

describe('StaffTimesheetComponent', () => {
  let component: StaffTimesheetComponent;
  let fixture: ComponentFixture<StaffTimesheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffTimesheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffTimesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
