import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnersRoutingModule } from './owners-routing.module';
import {IonicModule} from "@ionic/angular";
import {OwnerRegisterComponent} from "./owner-register/owner-register.component";
import {OwnerDetailsComponent} from "./owner-details/owner-details.component";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [OwnerRegisterComponent, OwnerDetailsComponent],
  imports: [
    CommonModule,
    OwnersRoutingModule,
    IonicModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class OwnersModule { }
