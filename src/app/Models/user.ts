import { Address_Prit } from "./address";
import { Role_Prit } from "./roles.enum";

export class User_Prit {
    id: number;
    firstName: string;
    lastName: string;
    address: Address_Prit;
    role: Role_Prit; // Enum for User roles (Admin, Faculty, Trainee)
    password: string;
    mobile: string;
    email: string;
    country:string;
    area:string;
  
    constructor(
      id: number,
      firstName: string,
      lastName: string,
      address: Address_Prit,
      role: Role_Prit,
      password: string,
      mobile: string,
      email: string,
      country:string,
      area:string
    ) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.address = address;
      this.role = role;
      this.password = password;
      this.mobile = mobile;
      this.email = email;
      this.country=country;
      this.area=area;
    }
  }
  