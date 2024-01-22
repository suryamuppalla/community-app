import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TenantRegisterComponent} from "./tenant-register/tenant-register.component";
import {TenantDetailsComponent} from "./tenant-details/tenant-details.component";

const routes: Routes = [
  {
    path: 'register',
    component: TenantRegisterComponent
  },
  {
    path: 'details',
    component: TenantDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TenantRoutingModule { }
