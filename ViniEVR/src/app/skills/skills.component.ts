import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SkillsData } from './skills-data'; // Importe SkillsDataItem

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.sass']
})
export class SkillsComponent implements OnInit {
  constructor(private titleService: Title) {}
  skillsData = SkillsData;

  ngOnInit(): void {
    this.titleService.setTitle('Skills - Vinícius');
  }

}
