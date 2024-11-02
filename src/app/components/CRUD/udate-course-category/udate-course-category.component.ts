import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category_Prit } from '../../../Models/category';
import { CategoryService } from '../../../services/caegory.service';

@Component({
  selector: 'app-udate-course-category',
  templateUrl: './udate-course-category.component.html',
  styleUrl: './udate-course-category.component.scss'
})
export class UdateCourseCategoryComponent {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isLinear = true;

  categories: Category_Prit[] = [];

  selectedCategory: Category_Prit | undefined;

  constructor(private fb: FormBuilder,  private catSer : CategoryService) {
    this.firstFormGroup = this.fb.group({
      categoryId: ['', Validators.required]
    });
    this.secondFormGroup = this.fb.group({
      categoryName: ['', Validators.required]
    });
    this.categories = catSer.getCategoryArr();
  }

  onCategorySelect(event: any) {
    const selectedId = event.value;
    this.selectedCategory = this.categories.find(category => category.id === selectedId);

    if (this.selectedCategory) {
      this.secondFormGroup.patchValue({
        categoryName: this.selectedCategory.description
      });
    }
  }

  onSave() {
    if (this.selectedCategory) {
      this.selectedCategory.description = this.secondFormGroup.value.categoryName;
      console.log("Updated Category:", this.selectedCategory);
      // Call a service here to save the updated category if needed
    }
  }
}
