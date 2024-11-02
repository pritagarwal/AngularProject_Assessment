import { Component } from '@angular/core';
import { AssessmentScore_Prit } from '../../../Models/assessment-score';
import { AssessmentScoreService } from '../../../services/assessmentScore.service';

@Component({
  selector: 'app-view-assessment-score',
  templateUrl: './view-assessment-score.component.html',
  styleUrl: './view-assessment-score.component.scss'
})
export class ViewAssessmentScoreComponent {


  assessmentScoreArr:AssessmentScore_Prit[]=[];
  constructor(private as:AssessmentScoreService){
    this.assessmentScoreArr = as.getAssessmentScoreArray();
  }

}
