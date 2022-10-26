import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JcontentComponent } from './jcontent/jcontent.component';
import { JobsappliedComponent } from './js-dashboard/jobsapplied/jobsapplied.component';
import { JsDashboardComponent } from './js-dashboard/js-dashboard.component';
import { JsProfileComponent } from './js-dashboard/js-profile/js-profile.component';
import { SearchjobsComponent } from './js-dashboard/searchjobs/searchjobs.component';
import { JsLoginComponent } from './js-login/js-login.component';
import { SignupComponent } from './js-signup/signup.component';

const routes: Routes = [
  {path:'searchjob',component:SearchjobsComponent},
  {path:'jsprofile',component:JsProfileComponent},
  {path:'jobsapplied',component:JobsappliedComponent},
  {path:'js-login',component:JsLoginComponent},
  {path:'sign-up',component:SignupComponent},
  {path:'js-dashboard',component:JsDashboardComponent},
  {path:'jcontent',component:JcontentComponent}
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
