import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffHomeComponent } from './staff-home/staff-home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [StaffHomeComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: []
})
export class StaffModule { }
