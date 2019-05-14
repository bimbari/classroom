import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffHomeComponent } from './staff-home/staff-home.component';
import { RouterModule } from '@angular/router';
import { StylesModule } from 'src/app/styles/styles.module';
import { StaffWallComponent } from './staff-wall/staff-wall.component';
import { StaffConferenceComponent } from './staff-conference/staff-conference.component';
import { StaffTrainingRecordComponent } from './staff-training-record/staff-training-record.component';
import { StaffAuditComponent } from './staff-audit/staff-audit.component';
import { StaffAvailabilityComponent } from './staff-availability/staff-availability.component';
import { StaffTimeoffCoverageComponent } from './staff-timeoff-coverage/staff-timeoff-coverage.component';
import { StaffTimesheetComponent } from './staff-timesheet/staff-timesheet.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [StaffHomeComponent, StaffWallComponent, StaffConferenceComponent, StaffTrainingRecordComponent, StaffAuditComponent, StaffAvailabilityComponent, StaffTimeoffCoverageComponent, StaffTimesheetComponent],
  imports: [
    CommonModule, RouterModule, FormsModule, ReactiveFormsModule, StylesModule
  ],
  exports: []
})
export class StaffModule { }
