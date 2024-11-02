import { Component } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
import { User_Prit } from '../../../Models/user';

@Component({
  selector: 'app-view-admin',
  templateUrl: './view-admin.component.html',
  styleUrl: './view-admin.component.scss'
})
export class ViewAdminComponent {
  arrAdmin:User_Prit[]=[]
  constructor(private as: AdminService){
    this.arrAdmin = as.getAdminUsers();
  }

}
