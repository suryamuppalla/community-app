import { Component, OnInit } from '@angular/core';
import {MenuController} from "@ionic/angular";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent  implements OnInit {

  constructor(public menuController: MenuController) { }
  public items: any[] = [];
  ngOnInit() {
    this.items = [
      {
        name: 'J. Sivanarayana',
        role: 'President',
        phone: '9848952278',
        thumbnail: 'assets/images/item-1.jpg',
      },
      {
        name: 'P. Madhava Rao',
        role: 'Vice President',
        phone: '9491887577',
        thumbnail: 'assets/images/item-7.jpg',
      },
      {
        name: 'K. Sanjeeva Prasad',
        role: 'General Secretary',
        phone: '9440376016',
        thumbnail: 'assets/images/item-4.jpg',
      },
      {
        name: 'B. Prabhakara Reddy',
        role: 'Joint Secretary',
        phone: '9640883670',
        thumbnail: 'assets/images/item-5.jpg',
      },
      {
        name: 'J. Vasudeva Rao',
        role: 'Treasurer',
        phone: '9494242385',
        thumbnail: 'assets/images/item-2.jpg',
      },
      {
        name: 'A. Raveendar',
        role: 'Director',
        phone: '9666988804',
        thumbnail: 'assets/images/item-10.jpg',
      },
      {
        name: 'B. Sunil',
        role: 'Director',
        phone: '9492025819',
        thumbnail: 'assets/images/item-6.jpg',
      },
      {
        name: 'V. Govardhan',
        role: 'Director',
        phone: '9492425304',
        thumbnail: 'assets/images/item-8.jpg',
      },
      {
        name: 'D. Yedukondalu',
        role: 'Director',
        phone: '9966173399',
        thumbnail: 'assets/images/item-9.jpg',
      }
    ];
  }

}
