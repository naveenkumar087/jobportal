import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JobseekerComponent } from './r-signup/jobseeker.component';
import { JobcontentComponent } from './rec-dashboard/jobcontent/jobcontent.component';
import { JobpostComponent } from './rec-dashboard/jobpost/jobpost.component';
import { RecDashboardComponent } from './rec-dashboard/rec-dashboard.component';
import { RecLoginComponent } from './rec-login/rec-login.component';
import { RecProfileComponent } from './rec-profile/rec-profile.component';

const routes: Routes = [
  {path:'rec-login',component:RecLoginComponent},
  {path:'rec-dashboard',component:RecDashboardComponent},
  {path:'jobpost',component:JobpostComponent},
  {path:'jobcontent',component:JobcontentComponent},
  {path:'jobseeker',component:JobseekerComponent},
  {path:'rec-profile',component:RecProfileComponent},
  {path:'Dashboard',component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecruiterRoutingModule { }
