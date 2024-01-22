import {Component, OnInit} from '@angular/core';
import {SplashScreen} from "@capacitor/splash-screen";
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public appPages = [
    { title: 'Dashboard', url: '/dashboard', icon: 'home' },
    { title: 'Owner Registration', url: '/owner/register', icon: 'mail' },
    { title: 'Owner Details', url: '/owner/details', icon: 'paper-plane' },
    { title: 'Tenant Registration', url: '/tenant/register', icon: 'heart' },
    { title: 'Tenant Details', url: '/tenant/details', icon: 'archive' },
    { title: 'Complaints', url: '/complaints/dashboard', icon: 'trash' },
    { title: 'Events', url: '/folder/spam', icon: 'warning' },
    { title: 'Maintenance', url: '/folder/spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
  ngOnInit() {
    this.showSplashScreen();
  }
  async showSplashScreen() {
    // Show the splash for two seconds and then automatically hide it:
    await SplashScreen.show({
      showDuration: 100000,
      autoHide: true,
    });
  }
}
