import { Component } from '@angular/core';
import { Course_Prit } from '../../../Models/course';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseService } from '../../../services/course.service';

@Component({
  selector: 'app-updatecourse',
  templateUrl: './updatecourse.component.html',
  styleUrls: ['./updatecourse.component.scss']
})
export class UpdateCourseComponent {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isLinear = true;
  
  arrCourse: Course_Prit[] = [];
  selectedCourse: Course_Prit | undefined;
  cs: CourseService;

  constructor(private fb: FormBuilder, private courseservice: CourseService) {
    this.firstFormGroup = this.fb.group({
      cId: ['', Validators.required]
    });
    this.secondFormGroup = this.fb.group({
      cName: ['', Validators.required],
      cDescription: ['', Validators.required]
    });

    this.cs = courseservice;
    this.arrCourse = this.cs.getAllCourses();
  }

  onCourseSelect(event: any) {
    const selectedId = event.value;
    this.selectedCourse = this.arrCourse.find(course => course.id === selectedId);

    if (this.selectedCourse) {
      this.secondFormGroup.patchValue({
        cName: this.selectedCourse.name,
        cDescription: this.selectedCourse.description
      });
    }
  }

  onUpdate() {
    if (this.selectedCourse) {
      this.selectedCourse.name = this.secondFormGroup.value.cName;
      this.selectedCourse.description = this.secondFormGroup.value.cDescription;

      console.log("Updated Course:", this.selectedCourse);
      // Here, you could call a service method to save the updated course.
      // For example: this.cs.updateCourse(this.selectedCourse);
    }
  }
}
