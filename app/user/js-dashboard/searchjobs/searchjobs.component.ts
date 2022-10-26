import { Component, OnInit } from '@angular/core';
import { RecServiceService } from 'src/app/rec-service.service';
import { UserServicesService } from 'src/app/user-services.service';



@Component({
  selector: 'app-searchjobs',
  templateUrl: './searchjobs.component.html',
  styleUrls: ['./searchjobs.component.css']
})
export class SearchjobsComponent implements OnInit {
  UserData : any;
  appliedData:any;
  searchText:any;
  jobData:any=[];
  userId:any=['']; 
  email:any;
  isApply:Boolean=true;
  isApplied:boolean=false;

  constructor(private listUser:UserServicesService , private listUser2:RecServiceService) { }

    ngOnInit(): void {
      this.listUser2.getJobData().subscribe((result)=>{
        console.log(result);
        this.jobData=result;
      })
    

      this.email = localStorage.getItem('email');
      this.userId = localStorage.getItem('userId')
    }
    
    onApplyClick(user:any){
      this.listUser.saveAppliedData({...user,email:this.email,userId:this.userId }).subscribe((result)=>{
      // this.toast.success("Job applied");
      this.isApply=false;
      this.isApplied=true;
      })
      // const rJobDetails = this.userData.find((item:any) => (item.jobtitle === this.appliedData.jobtitle))
      // localStorage.setItem('rJobtitle', rJobDetails.jobtitle);
    }

  }



    // ngOnInit(): void {
    //   this.service.getJobData().subscribe((result) => {
    //     console.log(result);
    //     this.userData = result;
    //   })
      // this.service2.getAppliedData().subscribe((result)=>{
      //   console.log(result);
      //   this.appliedData=result;
      // })