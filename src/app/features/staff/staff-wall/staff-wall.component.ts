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
    let today = moment();
    this.formGroup = this.fb.group({
      date: [{ begin: today.startOf('week').add("days", 1).toDate(), end: today.endOf('week').add("days", -1).toDate() }]
    });
  }

}
