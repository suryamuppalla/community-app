import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {OwnerDetails} from "./owner-details";
import {FormControl} from "@angular/forms";
import {MenuController} from "@ionic/angular";

@Component({
  selector: 'app-owner-details',
  templateUrl: './owner-details.component.html',
  styleUrls: ['./owner-details.component.scss'],
})
export class OwnerDetailsComponent  implements OnInit {

  public owners: any[] = [];
  public filteredOwners: any[] = [];
  public searchControl = new FormControl();
  constructor(private http: HttpClient, public menuController: MenuController) { }

  ngOnInit() {
    this.owners = OwnerDetails;
    this.filteredOwners = this.owners.slice();

    this.searchControl.valueChanges.subscribe(value => {
      if (!value) {
        this.filteredOwners = this.owners.slice();
      }
      this.filteredOwners = this.owners.filter(owner => {
        return owner.name.toLowerCase().includes(value.toLowerCase()) || owner.hNo?.toString()?.toLowerCase().includes(value.toLowerCase());
      });
    });

  }

}
