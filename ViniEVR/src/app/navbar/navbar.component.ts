import { Component, HostListener, OnInit, Output, EventEmitter } from '@angular/core';
import { navbarData } from './nav-data';
import * as bootstrap from 'bootstrap';

interface NavBarToggle{
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})

export class NavbarComponent implements OnInit{
  @Output() onToggleNavbar : EventEmitter<NavBarToggle> = new EventEmitter();

  collapsed = false;
  screenWidth = 0;
  navData = navbarData;

  @HostListener('window:resize', ['$event'])
  onResize(event: any){
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 768){
      this.collapsed = false;
    }
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    const collapsedState = localStorage.getItem('menuCollapsed');
    if (collapsedState === 'true') {
      this.collapsed = true;
    } else {
      this.collapsed = false;
    }
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach(tooltipTriggerEl => {
      new bootstrap.Tooltip(tooltipTriggerEl);
    });
    this.onToggleNavbar.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }
  
  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    
    localStorage.setItem('menuCollapsed', this.collapsed.toString());
    this.onToggleNavbar.emit({collapsed: this.collapsed, screenWidth: this.screenWidth})
  }
  
  openLink(data: any): void {
    if (data.label === 'Contato') {
      window.open(data.link, '_blank');
    }
  }
  
}
