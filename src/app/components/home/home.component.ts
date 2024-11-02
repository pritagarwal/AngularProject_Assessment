import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Role_Prit } from '../../Models/roles.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit  {
  isLoggedIn = false;
  isAdmin = false;
  userName:string='';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.userStatus$.subscribe((currentUser) => {
      this.isLoggedIn = !!currentUser; // Update login status
      this.isAdmin = currentUser?.role === Role_Prit.Admin; // Check if the user is an admin
      console.log(currentUser); // Should log the current user if logged in
    });
  }


}
