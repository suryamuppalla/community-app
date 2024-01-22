import {Component} from '@angular/core';
import {MenuController} from "@ionic/angular";

@Component({
  selector: 'app-complaint-register',
  templateUrl: './complaint-register.component.html',
  styleUrls: ['./complaint-register.component.scss'],
})
export class ComplaintRegisterComponent {

  constructor(public menuController: MenuController) {
    this.actions = this.items.map(item => ({
      text: `${item.name} | ${item.work}`,
      role: item.work,
      data: {
        action: item.name,
      },
    }))
  }

  public actions: any[] = []
  public items: any[] = [
    {
      name: 'J. Sivanarayana',
      role: 'President',
      phone: '9848952278',
      work: 'Approvals',
      thumbnail: 'assets/images/item-1.jpg',
    },
    {
      name: 'P. Madhava Rao',
      role: 'Vice President',
      phone: '9491887577',
      work: 'Park Maintenance',
      thumbnail: 'assets/images/item-7.jpg',
    },
    {
      name: 'K. Sanjeeva Prasad',
      role: 'General Secretary',
      phone: '9440376016',
      work: 'Security',
      thumbnail: 'assets/images/item-4.jpg',
    },
    {
      name: 'B. Prabhakara Reddy',
      role: 'Joint Secretary',
      phone: '9640883670',
      work: 'CC Cameras',
      thumbnail: 'assets/images/item-5.jpg',
    },
    {
      name: 'J. Vasudeva Rao',
      role: 'Treasurer',
      phone: '9494242385',
      work: 'Accounts',
      thumbnail: 'assets/images/item-2.jpg',
    },
    {
      name: 'A. Raveendar',
      role: 'Director',
      phone: '9666988804',
      work: 'STP Maintenance',
      thumbnail: 'assets/images/item-10.jpg',
    },
    {
      name: 'B. Sunil',
      role: 'Director',
      phone: '9492025819',
      work: 'Water Maintenance',
      thumbnail: 'assets/images/item-6.jpg',
    },
    {
      name: 'V. Govardhan',
      role: 'Director',
      phone: '9492425304',
      work: 'Event Management',
      thumbnail: 'assets/images/item-8.jpg',
    },
    {
      name: 'D. Yedukondalu',
      role: 'Director',
      phone: '9966173399',
      work: 'Drainage',
      thumbnail: 'assets/images/item-9.jpg',
    }
  ];

}
