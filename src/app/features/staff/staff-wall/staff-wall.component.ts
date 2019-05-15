import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-staff-wall',
  templateUrl: './staff-wall.component.html',
  styleUrls: ['./staff-wall.component.scss']
})
export class StaffWallComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  formGroup: FormGroup;

  initForm() {

    let beginDate = moment().add('weeks', -1).startOf('isoWeek').toDate(),
      endDate = moment().add('weeks', -1).endOf('isoWeek').toDate();

    this.formGroup = this.fb.group({
      date: [{ begin: beginDate, end: endDate }]
    });
  }

}


import {NativeDateAdapter} from '@angular/material';
import {Injectable} from '@angular/core';

@Injectable()
export class MyDateAdapter extends NativeDateAdapter {

  getFirstDayOfWeek(): number {
    return 1;
  }

}