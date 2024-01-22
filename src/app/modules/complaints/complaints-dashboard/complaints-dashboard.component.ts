import { Component } from '@angular/core';
import {MenuController} from "@ionic/angular";

@Component({
  selector: 'app-complaints-dashboard',
  templateUrl: './complaints-dashboard.component.html',
  styleUrls: ['./complaints-dashboard.component.scss'],
})
export class ComplaintsDashboardComponent   {

  constructor(public menuController: MenuController) { }



}
