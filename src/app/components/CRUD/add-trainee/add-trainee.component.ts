import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TraineeService } from '../../../services/trainee.service';
import { Trainee_Prit } from '../../../Models/trainee';

@Component({
  selector: 'app-add-trainee',
  templateUrl: './add-trainee.component.html',
  styleUrl: './add-trainee.component.scss'
})
export class AddTraineeComponent {

  traineeForm: FormGroup;
  isLinear = true;

  constructor(private fb: FormBuilder, private traineeService: TraineeService) {
    // Initialize form with 'userId' control
    this.traineeForm = this.fb.group({
      userId: ['', [Validators.required, Validators.min(1)]],
      name:['',Validators.required]
    });
  }

  // Method to save trainee
  onSave(): void {
    if (this.traineeForm.valid) {
      const userId = this.traineeForm.value.userId;
      const newTrainee = new Trainee_Prit(this.traineeService.getAllTrainees().length + 1, userId,this.traineeForm.value.userId.name);
      this.traineeService.addTrainee(newTrainee);
      console.log('Trainee added:', newTrainee);
    } else {
      console.log('Form is invalid');
    }
  }

  // Method to reset the form
  onReset(): void {
    this.traineeForm.reset();
  }
}
