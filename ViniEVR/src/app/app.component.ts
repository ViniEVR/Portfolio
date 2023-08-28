import { Component } from '@angular/core';

interface NavBarToggle{
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Portfolio - Vini';

  isNavbarCollapsed = false;
  screenWidth = 0;

  onToggleNavbar(data: NavBarToggle): void {
    this.screenWidth = data.screenWidth;
    this.isNavbarCollapsed = data.collapsed;
  }
  handleNavbarToggle(event: NavBarToggle): void {
    this.isNavbarCollapsed = event.collapsed;
    this.screenWidth = event.screenWidth;
  }
  
  
}
