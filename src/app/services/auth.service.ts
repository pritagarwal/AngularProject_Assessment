import { EventEmitter, Injectable, Output, OutputEmitterRef } from '@angular/core';
import { UserService } from './user.service';
import { User_Prit } from '../Models/user';
import { BehaviorSubject } from 'rxjs';
import { Role_Prit } from '../Models/roles.enum';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInUser: User_Prit | null = null;
  private userStatusSubject = new BehaviorSubject<User_Prit | null>(null); // BehaviorSubject to hold user state
  userStatus$ = this.userStatusSubject.asObservable(); // Observable to subscribe to

  constructor(private userService: UserService) {}

  @Output() logInName:EventEmitter<string>=new EventEmitter<string>();


  // Authenticate
  login(firstName: string, password: string): boolean {
    const users = this.userService.getAllUsers();
    const user = users.find(
      (u) =>
        u.firstName === firstName &&
        u.password === password
    );

    if (user) {
      this.loggedInUser = user; // Set the currently logged-in user
      this.userStatusSubject.next(this.loggedInUser); // Emit the logged-in user
      this.logInName.emit(firstName);
      return true; // Successful login
    }

    return false; // Invalid credentials
  }

  // Get the role of the logged-in user
  getUserRole(): string | null {
    if (this.loggedInUser) {
      return this.loggedInUser.role === Role_Prit.Admin ? 'ADMIN' : 'General User';
    }
    return null; // No user logged in
  }

  getLoggedInUser(): User_Prit | null {
    return this.loggedInUser;
  }

  // Logout method
  logout(): void {
    this.loggedInUser = null;
    this.userStatusSubject.next(null); // Emit null on logout
  }
}
