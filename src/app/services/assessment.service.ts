import { Injectable } from '@angular/core';
import { Assessment_Prit } from '../Models/assessment';
import { Question_Prit } from '../Models/question';


@Injectable({
  providedIn: 'root'
})
export class  AssessmentService{

  assessments: Assessment_Prit[] = [
    new Assessment_Prit(
        1, 'A001', new Date(), '10:00 AM', [
            new Question_Prit(1, 'What is JavaScript?', ['A programming language', 'A database', 'An OS', 'A framework'], 'A programming language', 'MCQ'),
            new Question_Prit(2, 'Explain closures in JavaScript.', ['Option 1', 'Option 2'], 'Option 2', 'Descriptive')
        ], 101, 'JavaScript', 4000, true, 50, ''
    ),
    new Assessment_Prit(
        2, 'A002', new Date(), '11:00 AM', [
            new Question_Prit(3, 'What is TypeScript?', ['JavaScript library', 'JavaScript framework', 'Superset of JavaScript', 'CSS framework'], 'Superset of JavaScript', 'MCQ'),
            new Question_Prit(4, 'What are interfaces in TypeScript?', ['Option 1', 'Option 2'], 'Option 1', 'Descriptive')
        ], 102, 'TypeScript', 2000, true, 70, ''
    ),
    new Assessment_Prit(
        3, 'A003', new Date(), '12:00 PM', [
            new Question_Prit(5, 'What is polymorphism?', ['Concept in OOP', 'Database schema', 'Algorithm', 'Data structure'], 'Concept in OOP', 'MCQ'),
            new Question_Prit(6, 'Explain inheritance in OOP.', ['Option 1', 'Option 2'], 'Option 2', 'Descriptive')
        ], 103, 'polymorphism', 1500, false, 60, ''
    ),
    new Assessment_Prit(
        4, 'A004', new Date(), '1:00 PM', [
            new Question_Prit(7, 'What is an API?', ['Application Programming Interface', 'Apple Product Integration', 'A Protocol', 'Algorithm'], 'Application Programming Interface', 'MCQ'),
            new Question_Prit(8, 'Describe RESTful services.', ['Option 1', 'Option 2'], 'Option 1', 'Descriptive')
        ], 104, ' API', 1800, true, 80, ''
    ),
    new Assessment_Prit(
        5, 'A005', new Date(), '2:00 PM', [
            new Question_Prit(9, 'What is a database?', ['A data storage', 'A data processing unit', 'Data framework', 'An API'], 'A data storage', 'MCQ'),
            new Question_Prit(10, 'Explain SQL and its uses.', ['Option 1', 'Option 2'], 'Option 2', 'Descriptive')
        ], 105, 'Database', 2200, false, 55, ''
    ),
    new Assessment_Prit(
        6, 'A006', new Date(), '3:00 PM', [
            new Question_Prit(11, 'What is version control?', ['Git', 'Code management', 'Data encryption', 'Process management'], 'Code management', 'MCQ'),
            new Question_Prit(12, 'Describe branching in Git.', ['Option 1', 'Option 2'], 'Option 1', 'Descriptive')
        ], 106, 'Version control', 950, true, 65, ''
    ),
    new Assessment_Prit(
        7, 'A007', new Date(), '4:00 PM', [
            new Question_Prit(13, 'What is Agile?', ['A project management methodology', 'A programming language', 'Database type', 'Algorithm'], 'A project management methodology', 'MCQ'),
            new Question_Prit(14, 'Explain Scrum in Agile.', ['Option 1', 'Option 2'], 'Option 2', 'Descriptive')
        ], 107, 'Agile', 5000, true, 75, ''
    ),
    new Assessment_Prit(
        8, 'A008', new Date(), '5:00 PM', [
            new Question_Prit(15, 'What is React?', ['JavaScript library', 'Java framework', 'CSS library', 'PHP library'], 'JavaScript library', 'MCQ'),
            new Question_Prit(16, 'Describe the virtual DOM.', ['Option 1', 'Option 2'], 'Option 1', 'Descriptive')
        ], 108, 'React', 1450, false, 85, ''
    ),
    new Assessment_Prit(
        9, 'A009', new Date(), '6:00 PM', [
            new Question_Prit(17, 'What is Node.js?', ['JavaScript runtime', 'CSS framework', 'Database', 'Operating system'], 'JavaScript runtime', 'MCQ'),
            new Question_Prit(18, 'Explain non-blocking I/O in Node.js.', ['Option 1', 'Option 2'], 'Option 1', 'Descriptive')
        ], 109, 'Node.js', 1400, true, 90, ''
    ),
    new Assessment_Prit(
        10, 'A010', new Date(), '7:00 PM', [
            new Question_Prit(19, 'What is CSS?', ['Cascading Style Sheets', 'Computing Style Sheets', 'Client Server Sheets', 'Custom Style Script'], 'Cascading Style Sheets', 'MCQ'),
            new Question_Prit(20, 'Describe CSS Flexbox.', ['Option 1', 'Option 2'], 'Option 2', 'Descriptive')
        ], 110, 'CSS', 1300, false, 95, ''
    )
];

getAssessment(){
    return this.assessments;
}

getAssessmentById(x:number):Assessment_Prit|undefined{
    return this.assessments.find(as=>as.id===x);
}
}