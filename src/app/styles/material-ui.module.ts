import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCheckboxModule, MatCardModule,
  MatFormFieldModule, MatAutocompleteModule, MatOptionModule, MatInputModule, MatTabsModule, MatNativeDateModule, MatDatepickerModule
} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule, BrowserAnimationsModule, MatButtonModule,
    MatCheckboxModule, MatCardModule, MatFormFieldModule,
    MatAutocompleteModule, MatOptionModule, MatInputModule,
    MatTabsModule, MatNativeDateModule, MatDatepickerModule
  ],
  exports: [
    BrowserAnimationsModule, MatButtonModule,
    MatCheckboxModule, MatCardModule, MatFormFieldModule,
    MatAutocompleteModule, MatOptionModule, MatInputModule,
    MatTabsModule, MatNativeDateModule, MatDatepickerModule
  ]
})
export class MaterialUiModule { }
