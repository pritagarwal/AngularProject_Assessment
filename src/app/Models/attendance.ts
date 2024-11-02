export class Attendance_Prit {
    id: number;
    traineeId: number; // Reference to Trainee
    assessmentId: number; // Reference to Assessment
    attended: boolean; // Indicates if the trainee attended the assessment
    date: Date; // Date of attendance

    constructor(id:number, traineeId:number, assessmentId:number, attended:boolean, date:Date){
        this.id = id
        this.traineeId = traineeId
        this.assessmentId = assessmentId
        this.attended = attended
        this.date = date
    }
  }