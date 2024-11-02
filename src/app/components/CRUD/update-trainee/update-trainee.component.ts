import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Trainee_Prit } from '../../../Models/trainee';
import { TraineeService } from '../../../services/trainee.service';

@Component({
  selector: 'app-update-trainee',
  templateUrl: './update-trainee.component.html',
  styleUrl: './update-trainee.component.scss'
})
export class UpdateTraineeComponent {

  isLinear = true;
  traineeIdFormGroup: FormGroup;
  traineeDetailsFormGroup: FormGroup;
  trainees: Trainee_Prit[] = [];
  selectedTrainee: Trainee_Prit | undefined;

  constructor(private fb: FormBuilder, private traineeService: TraineeService) {
    // Initialize form groups
    this.traineeIdFormGroup = this.fb.group({
      selectedTraineeId: ['', Validators.required]
    });

    this.traineeDetailsFormGroup = this.fb.group({
      name: ['', Validators.required],
      userId: ['', [Validators.required, Validators.min(1)]]
    });

    // Fetch trainees from the service
    this.trainees = this.traineeService.getAllTrainees();
  }

  // Method to update form fields based on selected trainee
  onTraineeSelect(): void {
    const selectedId = this.traineeIdFormGroup.get('selectedTraineeId')?.value;
    this.selectedTrainee = this.traineeService.getTraineeById(selectedId);

    if (this.selectedTrainee) {
      this.traineeDetailsFormGroup.patchValue({
        name: this.selectedTrainee.name,
        userId: this.selectedTrainee.userId
      });
    }
  }

  // Save updated trainee details
  onSave(): void {
    if (this.selectedTrainee && this.traineeDetailsFormGroup.valid) {
      const updatedTrainee = new Trainee_Prit(
        this.selectedTrainee.id,
        this.traineeDetailsFormGroup.get('userId')?.value,
        this.traineeDetailsFormGroup.get('name')?.value
      );
      this.traineeService.updateTrainee(updatedTrainee);
      console.log('Trainee details updated:', updatedTrainee);
    }
  }
}
