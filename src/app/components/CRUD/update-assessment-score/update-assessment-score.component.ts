import { Component } from '@angular/core';
import { Trainee_Prit } from '../../../Models/trainee';
import { Assessment_Prit } from '../../../Models/assessment';
import { TraineeService } from '../../../services/trainee.service';
import { AssessmentService } from '../../../services/assessment.service';
import { AssessmentScoreService } from '../../../services/assessmentScore.service';


@Component({
  selector: 'app-update-assessment-score',
  templateUrl: './update-assessment-score.component.html',
  styleUrl: './update-assessment-score.component.scss'
})
export class UpdateAssessmentScoreComponent {


  traineeList: Trainee_Prit[] = [];
  selectedTraineeId: number | null = null;
  assessmentDetail: Assessment_Prit | undefined;
  score: number | null = null;

  constructor(
    private traineeService: TraineeService,
    private assessmentService: AssessmentService,
    private assessmentScoreService: AssessmentScoreService
  ) {
    this.traineeList = this.traineeService.getAllTrainees();
  }

  // Step 1: Select Trainee
  onTraineeSelect(traineeId: number) {
    this.selectedTraineeId = traineeId;

    // Find the corresponding assessmentScore for the trainee
    const assessmentScore = this.assessmentScoreService.getAssessmentScoreByTraineeId(traineeId);
    
    if (assessmentScore) {
      // Get the assessment details using the assessmentId from assessmentScore
      this.assessmentDetail = this.assessmentService.getAssessmentById(assessmentScore.assessmentId);
    } 
  }

  // Step 4: Save Assessment Score
  saveScore() {
    if (this.selectedTraineeId !== null && this.score !== null) {
      this.assessmentScoreService.updateScore(this.selectedTraineeId, this.score);
      alert('Score saved successfully!');
      this.resetForm();
    }
  }

  // Reset form
  resetForm() {
    this.selectedTraineeId = null;
    this.score = null;
  }
}
