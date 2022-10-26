import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { RecServiceService } from 'src/app/rec-service.service';
import { data } from 'jquery';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

   

  jobData: any;
  recData: any;
  userCount:any;
  constructor(private userService: RecServiceService) { }

  ngOnInit(): void {
    this.jobspostedCount();
  }
  jobspostedCount(){   
    this.userService.getuserCount(data)
    .subscribe(
      (data:any) =>{ 
      this.userCount = data.length;
      console.log(data)
       }
    )
  }
  }

