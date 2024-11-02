import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdateCourseCategoryComponent } from './udate-course-category.component';

describe('UdateCourseCategoryComponent', () => {
  let component: UdateCourseCategoryComponent;
  let fixture: ComponentFixture<UdateCourseCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UdateCourseCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UdateCourseCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
