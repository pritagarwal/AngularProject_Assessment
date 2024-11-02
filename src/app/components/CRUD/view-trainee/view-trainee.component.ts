import { Component } from '@angular/core';
import { TraineeService } from '../../../services/trainee.service';
import { Trainee_Prit } from '../../../Models/trainee';

@Component({
  selector: 'app-view-trainee',
  templateUrl: './view-trainee.component.html',
  styleUrl: './view-trainee.component.scss'
})
export class ViewTraineeComponent {
  arrTrainee:Trainee_Prit[]=[]

  constructor(private ts : TraineeService){
    this.arrTrainee=ts.getAllTrainees();
  }

}
