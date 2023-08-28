import { Component, Input } from '@angular/core';
import { TopComponent } from '../top/top.component';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.sass']
})
export class BodyComponent {
  @Input() collapsed = false;
  @Input() screenWidth = 0;

  ngOnInit(): void {
    const collapsedState = localStorage.getItem('menuCollapsed'); 
  
    if (collapsedState === 'true') {
      this.collapsed = true;
    } else {
      this.collapsed = false;
    }
  }


  
  
  getBodyClass(): string {
    if (this.collapsed && this.screenWidth > 768) {
      return 'bodyTrimmed';
    } else if (this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
      return 'bodyMdScreen';
    } else {
      return '';
    }
  }
}