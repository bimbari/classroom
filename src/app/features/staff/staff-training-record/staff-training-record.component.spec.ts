import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffTrainingRecordComponent } from './staff-training-record.component';

describe('StaffTrainingRecordComponent', () => {
  let component: StaffTrainingRecordComponent;
  let fixture: ComponentFixture<StaffTrainingRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffTrainingRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffTrainingRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
