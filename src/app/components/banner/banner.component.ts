import { NgIf } from '@angular/common';
import { Component, ElementRef, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Role_Prit } from '../../Models/roles.enum';
import { User_Prit } from '../../Models/user';
import { Address_Prit } from '../../Models/address';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent implements OnInit {

  isRegisterMode = false;
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;
  userData!:User_Prit;
  isSubmitted = false;

 

  constructor(private authService: AuthService, private el: ElementRef,private fb: FormBuilder){}


  onSubmit(){
      this.closeModal(); // Call the close method after login
  }


  toggle(event: MouseEvent) {
    event.preventDefault();
    this.isRegisterMode = !this.isRegisterMode; // Toggle the mode
  }

  private closeModal() {
    // Find the close button in the modal and simulate a click
    const closeButton = this.el.nativeElement.querySelector('.btn-close');
    if (closeButton) {
      closeButton.click(); // Simulate click on the close button
    }
  }

  ngOnInit(): void {
    // Subscribe to the user status observable
    this.authService.userStatus$.subscribe((user) => {
      if (user) {
        this.isLoggedIn = true;
        this.isAdmin = user.role === Role_Prit.Admin; // Check if the logged-in user is an admin
      } else {
        this.isLoggedIn = false;
        this.isAdmin = false;
      }
    });
  }

  onLogout() {
    this.authService.logout(); // Call logout method
  }

  onRegister(){
    this.closeModal();
  }


  
  
}


