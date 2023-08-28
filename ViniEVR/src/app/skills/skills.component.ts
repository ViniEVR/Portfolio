import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.sass']
})
export class SkillsComponent implements OnInit{

  constructor(private titleService: Title){}

  ngOnInit(): void {
    this.titleService.setTitle('Skills - Vinícius')
  }

}
