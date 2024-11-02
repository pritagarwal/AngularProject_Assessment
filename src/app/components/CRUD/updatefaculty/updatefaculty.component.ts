import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Faculty_Prit } from '../../../Models/faculty';
import { FacultyService } from '../../../services/faculty.service';

@Component({
  selector: 'app-updatefaculty',
  templateUrl: './updatefaculty.component.html',
  styleUrl: './updatefaculty.component.scss'
})
export class UpdatefacultyComponent implements OnInit {

  isLinear = true;
  facultySelectFormGroup: FormGroup;
  facultyEditFormGroup: FormGroup;
  facultyList: Faculty_Prit[] = [];

  constructor(private fb: FormBuilder, private facultyService: FacultyService) {
    this.facultySelectFormGroup = this.fb.group({
      facultyId: ['', Validators.required]
    });

    this.facultyEditFormGroup = this.fb.group({
      name: ['', Validators.required],
      userId: ['', [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit(): void {
    // Fetch all faculty members
    this.facultyList = this.facultyService.getAllFaculty();
  }

  // Called when a faculty ID is selected from the dropdown
  onFacultySelect(id: number): void {
    const selectedFaculty = this.facultyService.getFacultyById(id);
    if (selectedFaculty) {
      this.facultyEditFormGroup.setValue({
        name: selectedFaculty.name,
        userId: selectedFaculty.userId
      });
    }
  }

  // Method to save the updated faculty details
  onSave(): void {
    if (this.facultyEditFormGroup.valid && this.facultySelectFormGroup.valid) {
      const updatedFaculty = new Faculty_Prit(
        this.facultySelectFormGroup.get('facultyId')?.value,
        this.facultyEditFormGroup.get('userId')?.value,
        this.facultyEditFormGroup.get('name')?.value
      );

      this.facultyService.updateFaculty(updatedFaculty);
      console.log('Faculty updated:', updatedFaculty);
    }
  }
}
