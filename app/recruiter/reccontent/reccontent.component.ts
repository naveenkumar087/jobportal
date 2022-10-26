import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { UserServicesService } from 'src/app/user-services.service';

@Component({
  selector: 'app-reccontent',
  templateUrl: './reccontent.component.html',
  styleUrls: ['./reccontent.component.css']
})
export class ReccontentComponent implements OnInit {

  constructor(private listUser:UserServicesService ) { }
  searchText:any;
    userData:any=[];
    ngOnInit(): void {
      this.listUser.getUserData().subscribe((result)=>{
        console.log(result);
        this.userData=result;
      })
    }
    deleteUser(user:any){
      this.userData.splice(user-1,1)
      this.listUser.deleteUser(user).subscribe((result: any)=>{
        console.warn('result',result)
      })
    }
    
}