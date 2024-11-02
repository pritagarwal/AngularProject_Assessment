import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Faculty_Prit } from '../../../Models/faculty';
import { FacultyService } from '../../../services/faculty.service';

@Component({
  selector: 'app-addfaculty',
  templateUrl: './addfaculty.component.html',
  styleUrl: './addfaculty.component.scss'
})
export class AddfacultyComponent {

  isLinear = true;
  facultyFormGroup: FormGroup;

  constructor(private fb: FormBuilder, private facultyService: FacultyService) {
    // Initialize form group
    this.facultyFormGroup = this.fb.group({
      name: ['', Validators.required],
      userId: ['', [Validators.required, Validators.min(1)]]
    });
  }

  // Method to save the new faculty details
  onSave(): void {
    if (this.facultyFormGroup.valid) {
      const newFacultyId = this.facultyService.getAllFaculty().length + 1;
      const newFaculty = new Faculty_Prit(
        newFacultyId,
        this.facultyFormGroup.get('userId')?.value,
        this.facultyFormGroup.get('name')?.value
      );

      this.facultyService.addFaculty(newFaculty);
      console.log('Faculty added:', newFaculty);
    }
  }
}
