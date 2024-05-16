import { Component } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent {
  isSidebarOpen: boolean = false;

  constructor() { }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
