import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffTimeoffCoverageComponent } from './staff-timeoff-coverage.component';

describe('StaffTimeoffCoverageComponent', () => {
  let component: StaffTimeoffCoverageComponent;
  let fixture: ComponentFixture<StaffTimeoffCoverageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffTimeoffCoverageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffTimeoffCoverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
