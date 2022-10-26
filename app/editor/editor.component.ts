import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserServicesService } from '../user-services.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  alert!:boolean;
  editUser=new FormGroup({
    fname:new FormControl(''),
    lname:new FormControl(''),
    phone:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),
    type:new FormControl(''),
    
  })
  constructor(private editorService:UserServicesService,private route:ActivatedRoute,private route2:Router) { }

  ngOnInit(): void {
    
    this.editorService.getCurrentData(this.route.snapshot.params['id']).subscribe((result:any)=>{
      this.editUser=new FormGroup({
        fname:new FormControl(result['fname']),
        lname:new FormControl(result['lname']),
        phone:new FormControl(result['phone']),
        email:new FormControl(result['email']),
        password:new FormControl(result['password']),
        type:new FormControl(result['type']),
        
      })
    })
  }
  updateUser(){
    this.editorService.updateUser(this.route.snapshot.params['id'],this.editUser.value).subscribe((result: any)=>{
      console.log(result,"data updated!!");
      // this.toast.success("udated");
      this.route2.navigate(['content'])
    })
  }

}