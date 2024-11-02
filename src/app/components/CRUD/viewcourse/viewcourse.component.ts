import { Component } from '@angular/core';
import { Course_Prit } from '../../../Models/course';
import { CourseService } from '../../../services/course.service';

@Component({
  selector: 'app-viewcourse',
  templateUrl: './viewcourse.component.html',
  styleUrl: './viewcourse.component.scss'
})
export class ViewcourseComponent {
  arrCourse:Course_Prit[] = []
  course:Course_Prit = new Course_Prit(0,'','');

  constructor(private CourseService:CourseService){
    this.arrCourse = this.CourseService.getAllCourses()
  }
}
