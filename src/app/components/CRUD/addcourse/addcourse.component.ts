import { Component } from '@angular/core';
import { Course_Prit } from '../../../Models/course';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseService } from '../../../services/course.service';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrl: './addcourse.component.scss'
})
export class AddcourseComponent {

  firstFormGroup:FormGroup
  secondFormGroup:FormGroup
  isLinear = false;


  arrCourse: Course_Prit[] = []
  course = new Course_Prit(0,'','')
  cs:CourseService

  constructor(private fb:FormBuilder, private courseservice:CourseService){
     
    this.firstFormGroup=this.fb.group({
     cName:['',Validators.required]
    })
    this.secondFormGroup = this.fb.group({
      cDescription:['',Validators.required],
     })

      this.cs = courseservice;
      this.arrCourse = this.cs.getAllCourses();
    }

    onSubmit(){
      var tempId = 0;
      var maxId = 0;
      this.arrCourse.forEach((p)=>{
        if(maxId < p.id){
          maxId = p.id
        }
      });
 
    tempId = maxId;
    tempId = tempId + 1;

    let cname = this.firstFormGroup.value.cName;
    let description = this.firstFormGroup.value.cDescription;

  
      this.course = new Course_Prit(tempId, cname, description)
      console.log(this.course);
     
  }
}
