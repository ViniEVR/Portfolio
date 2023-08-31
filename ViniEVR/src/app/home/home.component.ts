import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit{

  constructor(private titleService: Title){}

  ngOnInit(): void {
    this.titleService.setTitle('Home - Vinícius')

    const elementsToHover = document.querySelectorAll('.title, .vertical');

    elementsToHover.forEach((element: Element) => {
        element.addEventListener('mouseenter', () => {
            elementsToHover.forEach((el: Element) => el.classList.add('hover-active'));
        });

        element.addEventListener('mouseleave', () => {
            elementsToHover.forEach((el: Element) => el.classList.remove('hover-active'));
        });
    });

  }
  

}
