import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { EditorComponent } from './editor/editor.component';
import { HeaderComponent } from './header/header.component';
import { LSelectorComponent } from './l-selector/l-selector.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';

const routes : Routes=[
  {
    path: 'user', loadChildren: () => import('./user/user.module')
      .then(mod => mod.UserModule)
  },
  {
    path: 'recruiter', loadChildren: () => import('./recruiter/recruiter.module')
      .then(mod => mod.RecruiterModule)
  },   
  {path:'', redirectTo:'homepage', pathMatch:'full'},
  {path:'homepage',component:HomepageComponent},
  {path:'list',component:ListComponent},
  {path:'editor/:id',component:EditorComponent},
  {path:'l-selector',component:LSelectorComponent},
  {path:'About',component:AboutComponent},
  

  ]

@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {

 }