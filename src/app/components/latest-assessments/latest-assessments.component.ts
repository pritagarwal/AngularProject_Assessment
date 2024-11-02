import { Component } from '@angular/core';
import { Assessment_Prit } from '../../Models/assessment';
import { Question_Prit } from '../../Models/question';

@Component({
  selector: 'app-latest-assessments',
  templateUrl: './latest-assessments.component.html',
  styleUrl: './latest-assessments.component.scss'
})
export class LatestAssessmentsComponent {


  
  latestAssessments: Assessment_Prit[] =[

  new Assessment_Prit(
    1, 'A001', new Date(), '10:00 AM', [
        new Question_Prit(1, 'What is JavaScript?', ['A programming language', 'A database', 'An OS', 'A framework'], 'A programming language', 'MCQ'),
        new Question_Prit(2, 'Explain closures in JavaScript.', ['Option 1', 'Option 2'], 'Option 2', 'Descriptive')
    ], 101, 'JavaScript', 100, true, 50, ''
),
new Assessment_Prit(
    2, 'A002', new Date(), '11:00 AM', [
        new Question_Prit(3, 'What is TypeScript?', ['JavaScript library', 'JavaScript framework', 'Superset of JavaScript', 'CSS framework'], 'Superset of JavaScript', 'MCQ'),
        new Question_Prit(4, 'What are interfaces in TypeScript?', ['Option 1', 'Option 2'], 'Option 1', 'Descriptive')
    ], 102, 'TypeScript', 200, true, 70, ''
),
new Assessment_Prit(
    3, 'A003', new Date(), '12:00 PM', [
        new Question_Prit(5, 'What is polymorphism?', ['Concept in OOP', 'Database schema', 'Algorithm', 'Data structure'], 'Concept in OOP', 'MCQ'),
        new Question_Prit(6, 'Explain inheritance in OOP.', ['Option 1', 'Option 2'], 'Option 2', 'Descriptive')
    ], 103, 'polymorphism', 150, false, 60, ''
)];
   


}