import { Component, ElementRef, EventEmitter, OnInit, Output, output } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-sign-in-modal',
  templateUrl: './sign-in-modal.component.html',
  styleUrl: './sign-in-modal.component.scss'
})
export class SignInModalComponent implements OnInit {
  
  signInForm: FormGroup;

  @Output() closebtn: EventEmitter<string> = new EventEmitter<string>();
  constructor(private authService: AuthService,private fb: FormBuilder){
    this.signInForm = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
  ngOnInit(): void {}



  onSubmit(): void {
    if (this.signInForm.valid) {
      const userData = this.signInForm.value;

      if (this.authService.login(userData.userName, userData.password)) {
        console.log('Login successful');
        this.closebtn.emit("close");
       
      } else {
        console.log('Login failed');
      }
    } else {
      console.log('Form is invalid');
    }
  }

  

}

