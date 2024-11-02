
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User_Prit } from '../../../Models/user';
import { UserService } from '../../../services/user.service';
import { Role_Prit } from '../../../Models/roles.enum';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrl: './add-admin.component.scss'
})
export class AddAdminComponent  implements OnInit {
  
    userForm: FormGroup;
    userDetailsForm: FormGroup;
    selectedUser: User_Prit | undefined 
    users: User_Prit[] = [];
    AdminRole:Role_Prit=Role_Prit.Admin
  
    constructor(private _formBuilder: FormBuilder, private userService: UserService) {
      this.userForm = this._formBuilder.group({
        userId: ['', Validators.required]
      });
      
      this.userDetailsForm = this._formBuilder.group({
        firstName: [{ value: '', disabled: true }],
        lastName: [{ value: '', disabled: true }],
        email: [{ value: '', disabled: true }],
        role: ['', Validators.required]
      });
    }
  
    ngOnInit() {
      // Fetch all users from the service
      this.users = this.userService.getAllUsers();
    }
  
    loadUserDetails() {
      const userId = this.userForm.value.userId;
      this.selectedUser = this.userService.getUserById(userId);
      
      if (this.selectedUser) {
        // Populate the user details form
        this.userDetailsForm.patchValue({
          firstName: this.selectedUser.firstName,
          lastName: this.selectedUser.lastName,
          email: this.selectedUser.email,
          role: this.selectedUser.role === Role_Prit.Trainee ? Role_Prit.Admin : this.selectedUser.role
        });
      }
    }
  
    saveDetails() {
      if (this.userDetailsForm.valid && this.selectedUser) {
        // Update the role to Admin
        this.selectedUser.role = this.userDetailsForm.value.role;
        this.userService.updateUser(this.selectedUser);
        alert('User role updated to Admin successfully!');
      }
    }
  
    resetDetails() {
      this.userDetailsForm.reset();
   
    }
  }
  