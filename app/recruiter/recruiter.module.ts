import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RecruiterRoutingModule } from './recruiter-routing.module';
import { JobseekerComponent } from './r-signup/jobseeker.component';
import { JobcontentComponent } from './rec-dashboard/jobcontent/jobcontent.component';
import { JobpostComponent } from './rec-dashboard/jobpost/jobpost.component';
import { RecDashboardComponent } from './rec-dashboard/rec-dashboard.component';
import { RecLoginComponent } from './rec-login/rec-login.component';
import { ReccontentComponent } from './reccontent/reccontent.component';
import { RecProfileComponent } from './rec-profile/rec-profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    RecLoginComponent,
    RecDashboardComponent,
    ReccontentComponent,
    JobpostComponent,
    JobcontentComponent,
    JobseekerComponent,
    RecProfileComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RecruiterRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class RecruiterModule { }
