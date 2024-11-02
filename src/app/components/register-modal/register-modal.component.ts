import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { mustMatch } from '../../helper/validators';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrl: './register-modal.component.scss'
})
export class RegisterModalComponent {

  signupForm!: FormGroup;
  isSubmitted = false;

  @Output() closebtn : EventEmitter<string>=new EventEmitter<string>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      street: ['', Validators.required],
      area: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      zip: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    },{
      validator: mustMatch('password', 'confirmPassword')
    }
  );
  }

  onSubmit(): void {
    this.isSubmitted = true;
    if (this.signupForm.valid) {
      console.log('Form Submitted', this.signupForm.value);
      alert('Registration successful!');
      this.closebtn.emit('close');
      
    } else {
      this.signupForm.markAllAsTouched(); // This will trigger validation messages for all fields
    }
  }
}