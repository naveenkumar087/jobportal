import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-js-dashboard',
  templateUrl: './js-dashboard.component.html',
  styleUrls: ['./js-dashboard.component.css']
})
export class JsDashboardComponent implements OnInit {

  username: any;
  firstName: any;
  lastName: any;
  email: any;
  phone: any;


  isDashboard: boolean = false;
  isProfile: boolean = true;
  isAppliedjobs: boolean = false;
  isAddition: boolean = false;
  issearch: boolean = false;
  isTable : boolean = false ;

  constructor(private router: Router) { }

  ngOnInit(): void {

    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  
  

    this.username = localStorage.getItem('loggedInUserName');
    this.firstName = localStorage.getItem('firstName');
    this.lastName = localStorage.getItem('lastName');
    this.email = localStorage.getItem('email');
    this.phone = localStorage.getItem('phone');
  }
  onLogout() {
    // this.toast.success("loggedout successfully");
    this.router.navigate(['/user/js-login']);
  }
  ondashboard() {
    this.isDashboard = true;
    this.isProfile = false;
    this.isAppliedjobs = false;
    this.isAddition = false;
    this.issearch = false;
    this.isTable = false
  }
  onprofile() {
    this.isDashboard = false;
    this.isProfile = true;
    this.isAppliedjobs = false;
    this.isAddition = false;
    this.issearch = false;
    this.isTable = false

  }
  onapplied() {
    this.isDashboard = false;
    this.isProfile = false;
    this.isAppliedjobs = true;
    this.isAddition = false;
    this.issearch = false;
    this.isTable = false

  }
  onaddition() {
    this.isDashboard = false;
    this.isProfile = false;
    this.isAppliedjobs = false;
    this.isAddition = true;
    this.issearch = false;
    this.isTable = false
    }

  onsearch() {
    this.isDashboard = false;
    this.isProfile = false;
    this.isAppliedjobs = false;
    this.isAddition = false;
    this.issearch = true;
    this.isTable = false
  }
  onTable(){
    this.isDashboard = false;
    this.isProfile = false;
    this.isAppliedjobs = false;
    this.isAddition = false;
    this.issearch = false;
    this.isTable = true ;
  }
}



