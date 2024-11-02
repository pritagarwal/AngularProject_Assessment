import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User_Prit } from '../../../Models/user';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrl: './update-admin.component.scss'
})
export class UpdateAdminComponent implements OnInit{

  adminForm: FormGroup;
  userDetailsForm: FormGroup;
  selectedAdmin: User_Prit | null = null;
  admins: User_Prit[] = [];

  constructor(private _formBuilder: FormBuilder, private userService: UserService) {
    this.adminForm = this._formBuilder.group({
      adminId: ['', Validators.required]
    });
    
    this.userDetailsForm = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit() {
    this.admins = this.userService.getAdminUsers();
  }

  loadUserDetails() {
    const userId = this.adminForm.value.adminId;
   // this.selectedAdmin = this.userService.getUserById(userId);
    if (this.userService.getUserById(userId)) {
      this.userDetailsForm.patchValue({
        firstName: this.userService.getUserById(userId)?.firstName,
        lastName: this.userService.getUserById(userId)?.lastName,
        email: this.userService.getUserById(userId)?.email
      });
    }
  }

  saveDetails() {
    if (this.userDetailsForm.valid && this.selectedAdmin) {
      this.selectedAdmin.firstName = this.userDetailsForm.value.firstName;
      this.selectedAdmin.lastName = this.userDetailsForm.value.lastName;
      this.selectedAdmin.email = this.userDetailsForm.value.email;
      this.userService.updateUser(this.selectedAdmin);
      alert('Admin details updated successfully!');
    }
  }

  resetDetails() {
    this.userDetailsForm.reset();
    this.selectedAdmin = null;
  }
}
