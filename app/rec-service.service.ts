import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class RecServiceService {

  url3="http://localhost:3500/recruiterDetails";
  url4="http://localhost:3500/jobData"

  constructor(private http:HttpClient ) {}

   // recruiter
   getrecData(){
    return this.http.get(this.url3);
  }
  saveRec (data:any){
   return this.http.post(this.url3,data)
  }

  // jobpposted

  getPostedJobData(recId: string) {
    return this.http.get(this.url4+`?recId=${recId}`);
  }
  // jobposting

  getJobData(){
    return this.http.get(this.url4);
  }
  saveJobData(data:any){
   return this.http.post(this.url4,data);
  }
  getProfileData(){
    return this.http.get(this.url3+'?id='+localStorage.getItem('recId'));
  }
  
//  count
getuserCount (data:any) {
  return this.http.get( this.url4+'?recId='+localStorage.getItem('recId')) ;
}
}
