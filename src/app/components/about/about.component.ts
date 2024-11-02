import { Component } from '@angular/core';
import { director_Prit } from '../../Models/directors';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  directors:director_Prit[] = [
    {
      name: 'Ram',
      position: 'CEO',
      bio: 'Ram has over 20 years of experience in the industry and is passionate about innovation.',
    },
    {
      name: 'Rahul',
      position: 'CTO',
      bio: 'Rahul leads the technology team and focuses on developing cutting-edge solutions.',
    },
    {
      name: 'Elon',
      position: 'CFO',
      bio: 'Elon ensures our financial health and manages our investments.',
    },
  ];

  selecteDirector?:director_Prit
  onSelect(director:director_Prit){
    this.selecteDirector = director;
  }
}
