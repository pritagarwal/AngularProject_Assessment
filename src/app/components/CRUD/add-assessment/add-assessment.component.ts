import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Assessment_Prit } from '../../../Models/assessment';
import { Question_Prit } from '../../../Models/question';
import { AssessmentService } from '../../../services/assessment.service';


@Component({
  selector: 'app-add-assessment',
  templateUrl: './add-assessment.component.html',
  styleUrl: './add-assessment.component.scss'
})
export class AddAssessmentComponent {
  isLinear = false;
  step1FormGroup: FormGroup;
  step2FormGroup: FormGroup;
  step3FormGroup: FormGroup;
  as:AssessmentService;
  assArr:Assessment_Prit[]=[]

  constructor(private fb: FormBuilder,private assSer:AssessmentService) {
    // Step 1: Assessment Details Form
    this.step1FormGroup = this.fb.group({
      name: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
    });

    // Step 2: Questions Form
    this.step2FormGroup = this.fb.group({
      questions: this.fb.array([this.createQuestionForm()]), // Start with one question form
    });

    // Step 3: Marks and Price Form
    this.step3FormGroup = this.fb.group({
      FacultyId: ['', [Validators.required, Validators.min(0)]],
      marks: ['', [Validators.required, Validators.min(0)]],
      price: ['', [Validators.required, Validators.min(0)]],
    });
    this.as=assSer;
    this.assArr=this.as.getAssessment();
  }

  get questions(): FormArray {
    return this.step2FormGroup.get('questions') as FormArray;
  }

  createQuestionForm(): FormGroup {
    return this.fb.group({
      qText: ['', Validators.required],
      option1: ['', Validators.required],
      option2: ['', Validators.required],
      option3: ['', Validators.required],
      option4: ['', Validators.required],
      answer: ['', Validators.required],
    });
  }

  addQuestion(): void {
    this.questions.push(this.createQuestionForm());
  }

  removeQuestion(index: number): void {
    if (this.questions.length > 1) {
      this.questions.removeAt(index);
    }
  }


  save() {
    var tempId = 0;
    var maxId = 0;
    this.assArr.forEach((p)=>{
      if(maxId < p.id){
        maxId = p.id
      }
    });
tempId=maxId+1;
    tempId = maxId +1 ;
    if (this.step1FormGroup.valid && this.step2FormGroup.valid && this.step3FormGroup.valid) {
      const assessment = new Assessment_Prit(
        tempId,
        this.step1FormGroup.value.name,
        this.step1FormGroup.value.date,
        this.step1FormGroup.value.time,
        this.convertQuestions(), 
        this.step3FormGroup.value.facultyId, 
        this.step1FormGroup.value.name, 
        this.step3FormGroup.value.price,
        true ,
        this.step3FormGroup.value.marks,
        this.step3FormGroup.value.imgpath
      );

      console.log('Assessment Saved:', assessment);
   
    }
  }


  private convertQuestions(): Question_Prit[] {
    return this.step2FormGroup.value.questions.map((q: any, index: number) => {
      return new Question_Prit(
        index + 1,
        q.qText,
        [q.option1, q.option2, q.option3, q.option4],
        q.answer,
        'multiple-choice' 
      );
    });
  }

  reset(stepper: any) {
    this.step1FormGroup.reset();
    this.step2FormGroup.reset();
    this.step3FormGroup.reset();
    stepper.reset();
  }
}
