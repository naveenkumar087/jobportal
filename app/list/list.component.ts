import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserServicesService } from '../user-services.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

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