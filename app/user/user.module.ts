import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { JsProfileComponent } from './js-dashboard/js-profile/js-profile.component';
import { JobsappliedComponent } from './js-dashboard/jobsapplied/jobsapplied.component';
import { SearchjobsComponent } from './js-dashboard/searchjobs/searchjobs.component';
import { JsDashboardComponent } from './js-dashboard/js-dashboard.component';
import { JsLoginComponent } from './js-login/js-login.component';
import { SignupComponent } from './js-signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { CustompipePipe } from './custompipe.pipe';
import { NgToastModule } from 'ng-angular-popup';
import { ToastrModule } from 'ngx-toastr';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import { JcontentComponent } from './jcontent/jcontent.component';


@NgModule({
  declarations: [
    SearchjobsComponent,
    JsProfileComponent,
    JobsappliedComponent, 
    JsLoginComponent,
    JsDashboardComponent,
    SignupComponent,
    CustompipePipe,
    JcontentComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgToastModule,
    ToastrModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule
  ]
})
export class UserModule { }
