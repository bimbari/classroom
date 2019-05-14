import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffWallComponent } from './staff-wall.component';

describe('StaffWallComponent', () => {
  let component: StaffWallComponent;
  let fixture: ComponentFixture<StaffWallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffWallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
