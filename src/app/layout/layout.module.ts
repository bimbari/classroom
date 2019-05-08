import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { DocumentComponent } from './document/document.component';
import { StylesModule } from '../styles/styles.module';
import { PageNotFoundComponent } from './errors/page-not-found.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent, FooterComponent, DocumentComponent, PageNotFoundComponent],
  imports: [
    CommonModule, RouterModule, StylesModule
  ],
  exports: [
    DocumentComponent
  ]
})
export class LayoutModule { }
