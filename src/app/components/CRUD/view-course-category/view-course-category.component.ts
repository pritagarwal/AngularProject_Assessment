import { Component } from '@angular/core';
import { CategoryService } from '../../../services/caegory.service';
import { Category_Prit } from '../../../Models/category';

@Component({
  selector: 'app-view-course-category',
  templateUrl: './view-course-category.component.html',
  styleUrl: './view-course-category.component.scss'
})
export class ViewCourseCategoryComponent {

arrCategory: Category_Prit[]=[];
  constructor(private cs : CategoryService){
       this.arrCategory= cs.getCategoryArr();
  }
}
