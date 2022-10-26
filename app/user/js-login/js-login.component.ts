import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServicesService } from 'src/app/user-services.service';
// import { NgToastService } from 'ng-angular-popup';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-js-login',
  templateUrl: './js-login.component.html',
  styleUrls: ['./js-login.component.css']
})
export class JsLoginComponent implements OnInit {

  //declarations

   loginForm: FormGroup = this.formBuilder.group({
    loginEmail: ["", [Validators.required, Validators.email]],
    loginPass: ["", [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%#?&])[A-Za-z\d@$!%*#?&]{8,}$/)]]
  })
  userData: any;
  isSubmitted!: boolean;
  isSubmitted2!: boolean;
  visible:boolean=true;
   changetype:boolean=true;
  //constructors
  constructor(private formBuilder: FormBuilder, private userService: UserServicesService,private router:Router,private toast:ToastrService) { }
    
  
  //ngOnInIt
  ngOnInit(): void {
    this.userService.getUserData().subscribe((result) => {
      console.log(result);
      this.userData = result;
    })
  }
  viewpass ( ) {
    this.visible = !this.visible;
    this.changetype= !this.changetype;
  }

  //function definitions
  onLogin() {
    if (this.loginForm.valid) {
      // debugger
      const loggednInUser = this.userData.find((item: any) => (item.email === this.loginForm.controls['loginEmail'].value))
      const userProfile = this.userData.find((item:any) => (item.email === this.loginForm.controls['loginEmail'].value))
      if (this.userData.some((item: any) => (item.email === this.loginForm.controls['loginEmail'].value) && (item.password === this.loginForm.controls['loginPass'].value))) {
        this.toast.success("logged in");
        // this.toast.success({detail:"SUCCESS",summary:'Your Success Message',duration:5000});
        // localStorage.setItem('loggedInUserName', loggednInUser.fname);
        // localStorage.setItem('firstName', userProfile.fname);
        // localStorage.setItem('lastName', userProfile.lname);
        // localStorage.setItem('email', userProfile.email);
        // localStorage.setItem('phone', userProfile.phone);
        // localStorage.setItem('dob', userProfile.dob);
        localStorage.setItem('userId',userProfile.id)
        this.router.navigate(['/user/js-dashboard']);
        // this.router.navigate(['/dashboard',{email:this.loginForm.value.loginEmail}]);
      }
      else if (this.userData.some((item: any) => (item.email !== this.loginForm.controls['loginEmail'].value))) {
        this.toast.error("Incorrect Details");
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