import { Component, Renderer2, ElementRef, OnInit, ViewChild  } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit{
  @ViewChild('bottom') bottom: ElementRef | undefined;
  yearsOld(): number{
    const birthday = new Date('2000-09-04');
      const currentDate = new Date();
      const differenceInMilliseconds = currentDate.getTime() - birthday.getTime();
      const yearsOld = (Math.floor(differenceInMilliseconds / (1000 * 3600 * 24 * 365.25))) + 1;
      return yearsOld
  }
  scrollToBottom() {
    if (this.bottom) {
      this.bottom.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  }
  constructor(private titleService: Title, private renderer: Renderer2, private el: ElementRef){}

  ngOnInit(): void {
    this.renderer.setStyle(document.body, 'overflow', 'hidden');
    this.titleService.setTitle('About - Vinícius')
  }
}
