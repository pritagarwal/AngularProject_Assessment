import { Injectable } from '@angular/core';
import { AssessmentScore_Prit } from '../Models/assessment-score';



@Injectable({
  providedIn: 'root'
})
export class  AssessmentScoreService{

    assessmentScores: AssessmentScore_Prit[] = [
        new AssessmentScore_Prit(1, 1, 1, 45),
        new AssessmentScore_Prit(2, 2, 2, 78),
        new AssessmentScore_Prit(3, 3, 3, 67),
        new AssessmentScore_Prit(4, 4, 4, 85),
        new AssessmentScore_Prit(5, 5, 5, 92),
        new AssessmentScore_Prit(6, 6, 6, 74),
        new AssessmentScore_Prit(7, 7, 7, 80),
        new AssessmentScore_Prit(8, 8, 8, 66),
        new AssessmentScore_Prit(9, 9, 9, 88),
        new AssessmentScore_Prit(10, 10, 10, 53)
    ];


    getAssessmentScoreArray():AssessmentScore_Prit[]{
      return this.assessmentScores;
    }

    getAssessmentScoreByTraineeId(traineeId: number): AssessmentScore_Prit | undefined {
      return this.assessmentScores.find(score => score.traineeId === traineeId);
    }

    updateScore(traineeId: number, newScore: number) {
      const assessmentScore = this.getAssessmentScoreByTraineeId(traineeId);
      if (assessmentScore) {
        assessmentScore.score = newScore;
      }
    }
    
}

