import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RecServiceService } from 'src/app/rec-service.service';

@Component({
  selector: 'app-rec-login',
  templateUrl: './rec-login.component.html',
  styleUrls: ['./rec-login.component.css']
})
export class RecLoginComponent implements OnInit {

  //declarations

   loginForm: FormGroup = this.formBuilder.group({
    loginEmail: ["", [Validators.required, Validators.email]],
    loginPass: ["", [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%#?&])[A-Za-z\d@$!%*#?&]{8,}$/)]]
  })
  recData: any;
  isSubmitted!: boolean;
  isSubmitted2!: boolean;
  visible:boolean=true;
  changetype:boolean=true;
  


  //constructors
  constructor(private formBuilder: FormBuilder, private userService: RecServiceService,private router:Router,private toast:ToastrService) { }

  //ngOnInIt
  ngOnInit(): void {
    this.userService.getrecData().subscribe((result) => {
      console.log(result);
      this.recData = result;
    })
  }
  viewpass ( ) {
    this.visible = !this.visible;
    this.changetype= !this.changetype;
  }

  //function definitions
  onLogin() {
    if (this.loginForm.valid) {
      const loggednInUser = this.recData.find((item: any) => (item.email === this.loginForm.controls['loginEmail'].value))
      const userProfile = this.recData.find((item:any) => (item.email === this.loginForm.controls['loginEmail'].value))
      if (this.recData.some((item: any) => (item.email === this.loginForm.controls['loginEmail'].value) && (item.password === this.loginForm.controls['loginPass'].value))) {
        this.toast.success('You have logged in Successfully');
        localStorage.setItem('loggedInUserName', loggednInUser.fname);
        // localStorage.setItem('firstName', userProfile.fname);
        // localStorage.setItem('lastName', userProfile.lname);
        // localStorage.setItem('email', userProfile.email);
        // localStorage.setItem('phone', userProfile.phone); 
        // localStorage.setItem('dob', userProfile.dob);
        localStorage.setItem('recId',userProfile.id)
        this.router.navigate(['/recruiter/rec-dashboard']);

        // this.router.navigate(['/dashboard',{email:this.loginForm.value.loginEmail}]);
      }
      else if (this.recData.some((item: any) => (item.email !== this.loginForm.controls['loginEmail'].value))) {
        this.toast.error('User has not registered yet');
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