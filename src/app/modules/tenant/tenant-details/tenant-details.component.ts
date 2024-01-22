import { Component, OnInit } from '@angular/core';
import {OwnerDetails} from "../../owners/owner-details/owner-details";
import {MenuController} from "@ionic/angular";

@Component({
  selector: 'app-tenant-details',
  templateUrl: './tenant-details.component.html',
  styleUrls: ['./tenant-details.component.scss'],
})
export class TenantDetailsComponent  implements OnInit {
  public owners: any[] = [];
  constructor(public menuController: MenuController) { }

  ngOnInit() {
    this.owners = OwnerDetails;
  }

}
