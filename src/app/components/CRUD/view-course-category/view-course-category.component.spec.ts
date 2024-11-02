import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCourseCategoryComponent } from './view-course-category.component';

describe('ViewCourseCategoryComponent', () => {
  let component: ViewCourseCategoryComponent;
  let fixture: ComponentFixture<ViewCourseCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewCourseCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCourseCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
