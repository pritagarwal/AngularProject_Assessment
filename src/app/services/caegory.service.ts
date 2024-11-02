import { Injectable } from "@angular/core";
import { Category_Prit } from "../Models/category";

@Injectable({
    providedIn: 'root'
  })

  export class CategoryService {
    categories: Category_Prit[] = [
        new Category_Prit(1, 'Computer Science'),
        new Category_Prit(2, 'Mechanical '),
        new Category_Prit(3, 'Civil '),
        new Category_Prit(4, 'Biology'),
        new Category_Prit(5, 'Physics'),
        new Category_Prit(6, 'Chemistry'),
        new Category_Prit(7, 'Mathematics'),
        new Category_Prit(8, 'Psychology'),
        new Category_Prit(9, 'Economics'),
        new Category_Prit(10, 'Political Science')
      ];
      getCategoryArr(){
        return this.categories;
      }
  }

 


