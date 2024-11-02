import { Injectable } from "@angular/core";
import { UserService } from "./user.service";
import { User_Prit } from "../Models/user";
import { Role_Prit } from "../Models/roles.enum";


@Injectable({
    providedIn: 'root'
  })

  export class AdminService {
    users:User_Prit[]=[];

    constructor(private us:UserService){
        this.users = us.getAllUsers();
    }

    admin_users: User_Prit[] = []

    getAdminUsers(): User_Prit[] {
      return this.users.filter(user => user.role === Role_Prit.Admin);
    }
  }