import { Component, OnInit } from '@angular/core';
import { RecServiceService } from 'src/app/rec-service.service';
import { UserServicesService } from 'src/app/user-services.service';

@Component({
  selector: 'app-jobsapplied',
  templateUrl: './jobsapplied.component.html',
  styleUrls: ['./jobsapplied.component.css']
})
export class JobsappliedComponent implements OnInit {
  appliedJobData: any;

  constructor( private service2:UserServicesService) { }

  ngOnInit(): void {
    // this.service2.getAppliedData().subscribe((result: any)=>{
    //   console.log(result);
    //   this.appliedJobData=result;
    // })
    this.getAppliedJobs();
  }

  getAppliedJobs() {
    this.service2.getAppliedJobData(localStorage.getItem('userId') as string)
      .subscribe(
        data => {
          this.appliedJobData = data;
        }
      )
}
}
