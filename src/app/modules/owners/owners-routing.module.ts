import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OwnerRegisterComponent} from "./owner-register/owner-register.component";
import {OwnerDetailsComponent} from "./owner-details/owner-details.component";

const routes: Routes = [
  // owner register
  {
    path: 'register',
    component: OwnerRegisterComponent
  },
  {
    path: 'details',
    component: OwnerDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnersRoutingModule { }
