import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
// import { data } from 'jquery';
@Injectable({
  providedIn: 'root'
})
export class UserServicesService {
  
  
  url="http://localhost:3000/users";
  url2="http://localhost:3000/PersonalDetails";
  url3="http://localhost:3000/appliedJobData"

  constructor(private http:HttpClient) { }

  getUserData(){
    return this.http.get(this.url);
  }
  saveUser(data:any){
   return this.http.post(this.url,data)
  }
  deleteUser(id:any){
    return this.http.delete(`${this.url}/${id}`)
  }
  getPersonalData(){
    return this.http.get(this.url2);
  }
  savePersonalUser(data:any){
    return this.http.post(this.url2,data)
  }
  getCurrentData(id:any){
    return this.http.get(`${this.url}/${id}`)
  }
  updateUser(id:any,data:any){
    return this.http.put(`${this.url}/${id}`,data)
  }
  
  getJobprofiledata(){
    return this.http.get(this.url+'?id='+localStorage.getItem('userId'));
  }   

  // appliedjobs
  getAppliedData(){
    return this.http.get(this.url3)
  }
  saveAppliedData(data:any){
    return this.http.post(this.url3,data)
  }
  getAppliedJobData(userId: string) {
    return this.http.get(this.url3+`?userId=${userId}`);
  }
  getProductList(){
    return this.http.get(this.url3);
  }
  saveProductList(data:any){
    return this.http.post(this.url3,data)
  }


  // deleteProduct(id: any){
  //   return this.http.delete(`${this.url3}/${id}`)
  // }
  // editProduct(id: any,data: any){
  //   return this.http.put(`${this.url}/${id}`,data)
  // }
}