import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TenantRoutingModule } from './tenant-routing.module';
import {TenantRegisterComponent} from "./tenant-register/tenant-register.component";
import {TenantDetailsComponent} from "./tenant-details/tenant-details.component";
import {IonicModule} from "@ionic/angular";


@NgModule({
  declarations: [TenantRegisterComponent, TenantDetailsComponent],
  imports: [
    CommonModule,
    TenantRoutingModule,
    IonicModule
  ]
})
export class TenantModule { }
