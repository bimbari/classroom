import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffAuditComponent } from './staff-audit.component';

describe('StaffAuditComponent', () => {
  let component: StaffAuditComponent;
  let fixture: ComponentFixture<StaffAuditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffAuditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
