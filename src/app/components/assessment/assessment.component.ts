import { Component, Input ,EventEmitter, Output, OnInit} from '@angular/core';
import { Assessment_Prit } from '../../Models/assessment';
import { Question_Prit } from '../../Models/question'

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrl: './assessment.component.scss'
})
export class AssessmentComponent implements OnInit {



  ngOnInit() {
    this.specialPrice = this.generateRandomValue();
  } 

  @Input() assessmentDetail: Assessment_Prit = new Assessment_Prit(
    0,
    '',                        // assessmentNo
    new Date(),                // assessmentDate
    '',                        // assessmentTime
    [new Question_Prit(0, '', [], '', '')], // questions
    0,                         // facultyId
    '',                        // name
    0,                         // price
    true,                     // isActive
    0,                         // marks
    ''                         // imgpath
);

@Output()
priceDrop:EventEmitter<number>=new EventEmitter<number>();

specialPrice:number=0;

  showDetails: boolean = false;

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }
 generateRandomValue(): number {
    const min = 1000;
    const max = 4000;
    this.specialPrice =  Math.floor(Math.random() * (max - min + 1)) + min;
    this.priceDrop.emit(this.specialPrice);
    return this.specialPrice;
}

}
