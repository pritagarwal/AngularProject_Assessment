import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AssessmentComponent } from './components/assessment/assessment.component';
import { AdminComponent } from './components/admin/admin.component';
import { ViewAssessmentComponent } from './components/view-assessment/view-assessment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LatestAssessmentsComponent } from './components/latest-assessments/latest-assessments.component';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ViewcourseComponent } from './components/CRUD/viewcourse/viewcourse.component';
import { UpdateCourseComponent } from './components/CRUD/updatecourse/updatecourse.component';
import { ViewfacultyComponent } from './components/CRUD/viewfaculty/viewfaculty.component';
import { AddfacultyComponent } from './components/CRUD/addfaculty/addfaculty.component';
import { UpdatefacultyComponent } from './components/CRUD/updatefaculty/updatefaculty.component';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AddAssessmentComponent } from './components/CRUD/add-assessment/add-assessment.component';
import { UpdateAssessmentComponent } from './components/CRUD/update-assessment/update-assessment.component';
import { AddQuestionComponent } from './components/CRUD/add-question/add-question.component';
import { UpdateQuestionComponent } from './components/CRUD/update-question/update-question.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {
  MatNativeDateModule
} from '@angular/material/core';
import { AddcourseComponent } from './components/CRUD/addcourse/addcourse.component';
import { AddCourseCategoryComponent } from './components/CRUD/add-course-category/add-course-category.component';
import { UdateCourseCategoryComponent } from './components/CRUD/udate-course-category/udate-course-category.component';
import { ViewCourseCategoryComponent } from './components/CRUD/view-course-category/view-course-category.component';
import { AddTraineeComponent } from './components/CRUD/add-trainee/add-trainee.component';
import { ViewTraineeComponent } from './components/CRUD/view-trainee/view-trainee.component';
import { UpdateTraineeComponent } from './components/CRUD/update-trainee/update-trainee.component';
import { ViewAdminComponent } from './components/CRUD/view-admin/view-admin.component';
import { AddAdminComponent } from './components/CRUD/add-admin/add-admin.component';
import { UpdateAdminComponent } from './components/CRUD/update-admin/update-admin.component';
import { RegisterModalComponent } from './components/register-modal/register-modal.component';
import { SignInModalComponent } from './components/sign-in-modal/sign-in-modal.component';
import { AddAssessmentScoreComponent } from './components/CRUD/add-assessment-score/add-assessment-score.component';
import { ViewAssessmentScoreComponent } from './components/CRUD/view-assessment-score/view-assessment-score.component';
import { UpdateAssessmentScoreComponent } from './components/CRUD/update-assessment-score/update-assessment-score.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    ContentComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    AssessmentComponent,
    AdminComponent,
    ViewAssessmentComponent,
    LatestAssessmentsComponent,
    ViewcourseComponent,
    AddcourseComponent,
    UpdateCourseComponent,
    ViewfacultyComponent,
    AddfacultyComponent,
    UpdatefacultyComponent,
    AddAssessmentComponent,
    UpdateAssessmentComponent,
    AddQuestionComponent,
    UpdateQuestionComponent,
    AddCourseCategoryComponent,
    UdateCourseCategoryComponent,
    ViewCourseCategoryComponent,
    AddTraineeComponent,
    ViewTraineeComponent,
    UpdateTraineeComponent,
    ViewAdminComponent,
    AddAdminComponent,
    UpdateAdminComponent,
    RegisterModalComponent,
    SignInModalComponent,
    AddAssessmentScoreComponent,
    ViewAssessmentScoreComponent,
    UpdateAssessmentScoreComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    MatInputModule,
    MatFormFieldModule,
    MatStepperModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatSelectModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimations(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
