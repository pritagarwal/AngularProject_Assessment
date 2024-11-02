import { Component } from '@angular/core';
import { Faculty_Prit } from '../../../Models/faculty';
import { FacultyService } from '../../../services/faculty.service';

@Component({
  selector: 'app-viewfaculty',
  templateUrl: './viewfaculty.component.html',
  styleUrl: './viewfaculty.component.scss'
})
export class ViewfacultyComponent {
  arrfaculty:Faculty_Prit[] = []
  faculty:Faculty_Prit = new Faculty_Prit(0,0,'');

  constructor(private FacultyService:FacultyService){
    this.arrfaculty = this.FacultyService.getAllFaculty()
  }
}
