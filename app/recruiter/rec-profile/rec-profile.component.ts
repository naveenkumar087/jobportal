import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecServiceService } from 'src/app/rec-service.service';

@Component({
  selector: 'app-rec-profile',
  templateUrl: './rec-profile.component.html',
  styleUrls: ['./rec-profile.component.css']
})
export class RecProfileComponent implements OnInit {

  username:any;
  firstName:any;
  lastName:any;
  email:any;
  phone:any;
  fname: any;
  dob:any

  constructor(private router:Router ,private userService:RecServiceService) { }

  ngOnInit(): void {
   
     this.userService.getProfileData()
     .subscribe(
      (data:any) => {
        this.username =data[0].username;
        this.firstName =data[0].fname;
        this.lastName =data[0].lname;
        this.email =data[0].email;
        this.phone =data[0].phone;
        this.dob = data[0].dob
      }
     )
  }
}
