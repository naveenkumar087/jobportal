import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgToastModule } from 'ng-angular-popup';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './list/login/login.component';
import { ListComponent } from './list/list.component';
import { EditorComponent } from './editor/editor.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LSelectorComponent } from './l-selector/l-selector.component';
import { AboutComponent } from './about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';








@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    ListComponent,
    EditorComponent,
    HomepageComponent,
    LSelectorComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgToastModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
