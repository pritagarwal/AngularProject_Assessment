import { Injectable } from '@angular/core';
import { Role_Prit } from '../Models/roles.enum';
import { User_Prit } from '../Models/user';
import { Address_Prit } from '../Models/address';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 


// Creating sample addresses
 address1 = new Address_Prit("123 Main St", "City1", "State1", "12345");
 address2 = new Address_Prit("456 Elm St", "City2", "State2", "67890");
 address3 = new Address_Prit("789 Oak St", "City3", "State3", "11223");

// Array of User_Prit objects with different roles
private users: User_Prit[] = [
  new User_Prit(1, "Alice", "Johnson", this.address1, Role_Prit.Admin, "password ", "111-111-1111", "alice@example.com", "Country1", "Area1"),
  new User_Prit(2, "Bob", "Smith", this.address2, Role_Prit.Faculty, "123", "222-222-2222", "bob@example.com", "Country2", "Area2"),
  new User_Prit(3, "Charlie", "Brown", this.address3, Role_Prit.Trainee, "password3", "333-333-3333", "charlie@example.com", "Country3", "Area3")
];
  
  constructor() { }

  getAllUsers(): User_Prit[] {
    return this.users;
  }

  getUserById(id: number): User_Prit | undefined {
    return this.users.find((user) => user.id === id);
  }

  addUser(user: User_Prit): void {
    this.users.push(user);
  }

  updateUser(updatedUser: User_Prit): void {
    const index = this.users.findIndex((user) => user.id === updatedUser.id);
    if (index !== -1) {
      this.users[index] = updatedUser;
    }
  }

  deleteUser(id: number): void {
    this.users = this.users.filter((user) => user.id !== id);
  }

  getAdminUsers(): User_Prit[] {
    return this.users.filter(user => user.role === Role_Prit.Admin);
  }
  
}
