import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaffHomeComponent } from './features/staff/staff-home/staff-home.component';
import { PageNotFoundComponent } from './layout/errors/page-not-found.component';

const routes: Routes = [
  { path: 'staff', component: StaffHomeComponent },
  { path: '',   redirectTo: '/staff', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
