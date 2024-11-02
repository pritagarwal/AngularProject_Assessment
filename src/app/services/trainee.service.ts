import { Injectable } from '@angular/core';
import { Trainee_Prit } from '../Models/trainee';

@Injectable({
  providedIn: 'root'
})
export class TraineeService {
  private trainees: Trainee_Prit[] = [
    new Trainee_Prit(1, 6, 'Alice Johnson'),
    new Trainee_Prit(2, 77, 'Bob Smith'),
    new Trainee_Prit(3, 8, 'Charlie Davis'),
    new Trainee_Prit(4, 9, 'Diana Brown'),
    new Trainee_Prit(5, 10, 'Ethan Wilson'),
    new Trainee_Prit(6, 11, 'Fiona White'),
    new Trainee_Prit(7, 12, 'George Taylor'),
    new Trainee_Prit(8, 13, 'Hannah Clark'),
    new Trainee_Prit(9, 14, 'Ian Miller'),
    new Trainee_Prit(10, 15, 'Julia Anderson')
  ];
  

  constructor() {}

  getAllTrainees(): Trainee_Prit[] {
    return this.trainees;
  }

  getTraineeById(id: number): Trainee_Prit | undefined {
    return this.trainees.find((trainee) => trainee.id === id);
  }

  addTrainee(trainee: Trainee_Prit): void {
    this.trainees.push(trainee);
  }

  updateTrainee(updatedTrainee: Trainee_Prit): void {
    const index = this.trainees.findIndex(
      (trainee) => trainee.id === updatedTrainee.id
    );
    if (index !== -1) {
      this.trainees[index] = updatedTrainee;
    }
  }

  deleteTrainee(id: number): void {
    this.trainees = this.trainees.filter((trainee) => trainee.id !== id);
  }
}
