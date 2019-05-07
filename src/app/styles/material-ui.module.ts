import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCheckboxModule, MatCardModule,
  MatFormFieldModule, MatAutocompleteModule, MatOptionModule, MatInputModule
} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule, BrowserAnimationsModule, MatButtonModule,
    MatCheckboxModule, MatCardModule, MatFormFieldModule,
    MatAutocompleteModule, MatOptionModule, MatInputModule
  ],
  exports: [
    BrowserAnimationsModule, MatButtonModule,
    MatCheckboxModule, MatCardModule, MatFormFieldModule,
    MatAutocompleteModule, MatOptionModule, MatInputModule
  ]
})
export class MaterialUiModule { }
