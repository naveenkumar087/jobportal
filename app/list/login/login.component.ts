import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserServicesService } from '../../user-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //declarations

   loginForm: FormGroup = this.formBuilder.group({
    loginEmail: ["", [Validators.required, Validators.email]],
    loginPass: ["", [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%#?&])[A-Za-z\d@$!%*#?&]{8,}$/)]]
  })
  userData: any;
  isSubmitted!: boolean;
  isSubmitted2!: boolean;


  //constructors
  constructor(private formBuilder: FormBuilder, private userService: UserServicesService,private router:Router) { }

  //ngOnInIt
  ngOnInit(): void {
    this.userService.getUserData().subscribe((result) => {
      console.log(result);
      this.userData = result;
    })
  }

  //function definitions
  onLogin() {
    debugger
    if (this.loginForm.valid) {
      if (this.userData.some((item: any) => (item.email === this.loginForm.controls['loginEmail'].value) && (item.password === this.loginForm.controls['loginPass'].value))) {
        this.isSubmitted = true;
        this.router.navigate(['list'])
        alert('Login Successful');
      }
      else if (this.userData.some((item: any) => (item.email !== this.loginForm.controls['loginEmail'].value))) {
        this.isSubmitted2 = true;
        alert('User Not Registered , Please Register')
      }
    }
  }

  closeAlert() {
    this.isSubmitted = false;
  }
  closeAlert2() {
    this.isSubmitted2 = false;
  }

}