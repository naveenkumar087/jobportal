import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { UserServicesService } from 'src/app/user-services.service';

@Component({
  selector: 'app-js-profile',
  templateUrl: './js-profile.component.html',
  styleUrls: ['./js-profile.component.css']
})
export class JsProfileComponent implements OnInit {

  username:any;
  firstName:any;
  lastName:any;
  email:any;
  phone:any;
  

  isDashboard:boolean=false;
  isProfile:boolean=true;
  isAppliedjobs:boolean=false;
  isAddition:boolean=false;

  constructor(private router:Router ,private userService:UserServicesService) { }

  ngOnInit(): void {

  // this.username = localStorage.getItem('loggedInUserName');
  // this.firstName = localStorage.getItem('firstName');
  // this.lastName = localStorage.getItem('lastName');
  // this.email = localStorage.getItem('email');
  // this.phone = localStorage.getItem('phone');
          }

       getJobprofiledata(){
        this.userService.getJobprofiledata()
        .subscribe(
          (data:any) => {
            // this.username =data[0].username;
            this.firstName =data[0].fname;
            this.lastName =data[0].lname;
            this.email =data[0].email;
            this.phone =data[0].phone;
          }
          )
          }
        
       
  onLogout(){
    // this.toast.success("loggedout successfully");
    this.router.navigate(['/user/js-login']);
  }

   ondashboard(){
      this.isDashboard=true;
      this.isProfile=false;
      this.isAppliedjobs=false;
      this.isAddition=false;
    }
    onprofile(){
      this.isDashboard=false;
      this.isProfile=true;
      this.isAppliedjobs=false;
      this.isAddition=false;
    }
    onapplied(){
      this.isDashboard=false;
      this.isProfile=false;
      this.isAppliedjobs=true;
      this.isAddition=false;
    }
    onaddition(){
      this.isDashboard=false;
      this.isProfile=false;
      this.isAppliedjobs=false;
      this.isAddition=true;
    }
  }
  


