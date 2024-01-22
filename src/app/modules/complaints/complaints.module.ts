import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComplaintsRoutingModule } from './complaints-routing.module';
import {ComplaintsDashboardComponent} from "./complaints-dashboard/complaints-dashboard.component";
import {IonicModule} from "@ionic/angular";
import {ComplaintRegisterComponent} from "./complaint-register/complaint-register.component";


@NgModule({
  declarations: [ComplaintsDashboardComponent, ComplaintRegisterComponent],
  imports: [
    CommonModule,
    ComplaintsRoutingModule,
    IonicModule
  ]
})
export class ComplaintsModule { }
