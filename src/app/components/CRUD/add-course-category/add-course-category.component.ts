import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category_Prit } from '../../../Models/category';
import { CategoryService } from '../../../services/caegory.service';

@Component({
  selector: 'app-add-course-category',
  templateUrl: './add-course-category.component.html',
  styleUrl: './add-course-category.component.scss'
})
export class AddCourseCategoryComponent {

  categoryFormGroup: FormGroup;
  isLinear = true;
  cs: CategoryService;
  categoryObj:Category_Prit = new Category_Prit(0,'');
  categoryArr:Category_Prit[]=[];


  

  constructor(private fb: FormBuilder,private catSer : CategoryService) {
    this.categoryFormGroup = this.fb.group({
      description: ['', Validators.required]
    });
    this.cs = catSer;
    this.categoryArr = this.cs.getCategoryArr();
    
  }

  onSave() {
    var tempId = 0;
    var maxId = 0;
    this.categoryArr.forEach((p)=>{
      if(maxId < p.id){
        maxId = p.id
      }
    });

    tempId = maxId +1 ;
    const categoryDescription = this.categoryFormGroup.value.description;
    this.categoryObj.id=tempId;
    this.categoryObj.description=this.categoryFormGroup.value.description;
    console.log("Category :", this.categoryObj);
    // Add logic here to save the category description, e.g., via a service
  }
}
