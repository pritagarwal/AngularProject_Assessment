import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Assessment_Prit } from '../../../Models/assessment';
import { AssessmentService } from '../../../services/assessment.service';


@Component({
  selector: 'app-update-assessment',
  templateUrl: './update-assessment.component.html',
  styleUrl: './update-assessment.component.scss'
})
export class UpdateAssessmentComponent implements OnInit {

  
    isLinear = true;
    assessmentSelectForm: FormGroup;
    assessmentEditForm: FormGroup;
    assessments: Assessment_Prit[] = [];
    selectedAssessment: Assessment_Prit | undefined;
  
    constructor(
      private fb: FormBuilder,
      private assessmentService: AssessmentService
    ) {
      this.assessmentSelectForm = this.fb.group({
        assessmentId: ['', Validators.required]
      });
  
      this.assessmentEditForm = this.fb.group({
        name: ['', Validators.required],
        facultyId: ['', Validators.required],
        marks: ['', Validators.required],
        price: ['', Validators.required],
        assessmentDate: ['', Validators.required],
        assessmentTime: ['', Validators.required],
        isActive: [false]
      });
    }
  
    ngOnInit(): void {
      this.assessments = this.assessmentService.getAssessment();
    }
  
    onAssessmentSelect(assessmentId: number): void {
      this.selectedAssessment = this.assessments.find(a => a.id === assessmentId);
      if (this.selectedAssessment) {
        this.assessmentEditForm.patchValue({
          name: this.selectedAssessment.name,
          facultyId: this.selectedAssessment.facultyId,
          marks: this.selectedAssessment.marks,
          price: this.selectedAssessment.price,
          assessmentDate: this.selectedAssessment.assessmentDate,
          assessmentTime: this.selectedAssessment.assessmentTime,
          isActive: this.selectedAssessment.isActive
          
        });
        
      }
    }
  
    onSave(): void {
      if (this.assessmentEditForm.valid && this.selectedAssessment) {
        const updatedValues = this.assessmentEditForm.value;
        console.log("Updated Assessment Data:", updatedValues);
      }
    }
  
    onReset(): void {
      this.assessmentEditForm.reset();
    }
  }
  