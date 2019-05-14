import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCheckboxModule, MatCardModule,
  MatFormFieldModule, MatAutocompleteModule, MatOptionModule, MatInputModule,
  MatTabsModule, MatNativeDateModule, MatDatepickerModule
} from '@angular/material';
import { SatDatepickerModule, SatNativeDateModule } from 'saturn-datepicker';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, BrowserAnimationsModule, MatButtonModule,
    MatCheckboxModule, MatCardModule, MatFormFieldModule,
    MatAutocompleteModule, MatOptionModule, MatInputModule,
    MatTabsModule, MatNativeDateModule, MatDatepickerModule,
    SatDatepickerModule, SatNativeDateModule
  ],
  exports: [
    BrowserAnimationsModule, MatButtonModule,
    MatCheckboxModule, MatCardModule, MatFormFieldModule,
    MatAutocompleteModule, MatOptionModule, MatInputModule,
    MatTabsModule, MatNativeDateModule, MatDatepickerModule,
    SatDatepickerModule, SatNativeDateModule
  ]
})
export class MaterialUiModule { }
