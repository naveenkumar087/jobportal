import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-js-dashboard',
  templateUrl: './rec-dashboard.component.html',
  styleUrls: ['./rec-dashboard.component.css']
})
export class RecDashboardComponent implements OnInit {

   
  username: any;
  firstName: any;
  lastName: any;
  email: any;
  phone: any;


  isDashboard:boolean=true;
  isProfile:boolean=false;
  isJob:boolean=false;
  isAddition:boolean=false;
  isMessages:boolean=false;


  constructor(private router:Router,private toast:ToastrService) { }

  ngOnInit(): void {

    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });

    this.username = localStorage.getItem('loggedInUserName');
    this.firstName = localStorage.getItem('firstName');
    this.lastName = localStorage.getItem('lastName');  
  }

  


  onLogout(){
    this.toast.success( 'Logout Successfull!!' );
    this.router.navigate(['/recruiter/rec-login']);
  }

   ondashboard(){
      this.isDashboard=true;
      this.isProfile=false;
      this.isJob=false;;
      this.isAddition=false;
      this.isMessages=false;
    
    }
    onprofile(){
      this.isDashboard=false;
      this.isProfile=true;
      this.isJob=false;;
      this.isAddition=false;
      this.isMessages=false;
    }
    onapplied(){
      this.isDashboard=false;
      this.isProfile=false;
      this.isJob=true;
      this.isAddition=false;
      this.isMessages=false;
    }
    onaddition(){
      this.isDashboard=false;
      this.isProfile=false;
      this.isJob=false;
      this.isAddition=true;
      this.isMessages=false;
    }
    onalerts(){
      this.isDashboard=false;
      this.isProfile=false;
      this.isJob=false;
      this.isAddition=false;
      this.isMessages=true;
    }
    
  }
  


