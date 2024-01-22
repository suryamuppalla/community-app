import { Component } from '@angular/core';
import {MenuController} from "@ionic/angular";

@Component({
  selector: 'app-tenant-register',
  templateUrl: './tenant-register.component.html',
  styleUrls: ['./tenant-register.component.scss'],
})
export class TenantRegisterComponent   {

  constructor(public menuController: MenuController) { }



}
