import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ComplaintsDashboardComponent} from "./complaints-dashboard/complaints-dashboard.component";
import {ComplaintRegisterComponent} from "./complaint-register/complaint-register.component";

const routes: Routes = [
  {
    path: 'dashboard',
    component: ComplaintsDashboardComponent
  },
  {
    path: 'register',
    component: ComplaintRegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComplaintsRoutingModule { }
