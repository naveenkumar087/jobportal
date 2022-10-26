import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { data } from 'jquery';
import { RecServiceService } from 'src/app/rec-service.service';
import { CustompipePipe } from 'src/app/user/custompipe.pipe';

@Component({
  selector: 'app-jobcontent',
  templateUrl: './jobcontent.component.html',
  styleUrls: ['./jobcontent.component.css']
})
export class JobcontentComponent implements OnInit {

  // constructor(private listUser:RecServiceService )  { }
  // searchText:any;
  //   jobData:any=[];
  //   ngOnInit(): void {
  //     this.listUser.getJobData().subscribe((result)=>{
  //       console.log(result);
  //       this.jobData=result;
  //     })
  //   }
    

  jobData: any;
  recData: any;
  // userCount:any;
  constructor(private userService: RecServiceService) { }

  ngOnInit(): void {
    this.getPostedJobs() ;  
    }
  getPostedJobs() {
    this.userService.getPostedJobData(localStorage.getItem('recId') as string)
      .subscribe(
        data => {
          this.jobData = data;
        }
      )
      }

  }

    