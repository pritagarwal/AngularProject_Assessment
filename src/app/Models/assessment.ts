import { Question_Prit } from "./question";

export class Assessment_Prit {
    id: number;
    assessmentNo: string;
    assessmentDate: Date;
    assessmentTime: string;
    questions: Question_Prit[];
    facultyId: number;
    name: string;          // New variable
    price: number;         // New variable
    isActive: boolean;     // New variable
    marks: number;         // New variable
    imgpath: string;       // New variable

    constructor(
        id: number,
        assessmentNo: string,
        assessmentDate: Date,
        assessmentTime: string,
        questions: Question_Prit[],
        facultyId: number,
        name: string,      // New parameter
        price: number,     // New parameter
        isActive: boolean, // New parameter
        marks: number,     // New parameter
        imgpath: string    // New parameter
    ) {
        this.id = id;
        this.assessmentNo = assessmentNo;
        this.assessmentDate = assessmentDate;
        this.assessmentTime = assessmentTime;
        this.questions = questions;
        this.facultyId = facultyId;
        this.name = name;           
        this.price = price;       
        this.isActive = isActive;  
        this.marks = marks;        
        this.imgpath = imgpath;     0
    }
}
