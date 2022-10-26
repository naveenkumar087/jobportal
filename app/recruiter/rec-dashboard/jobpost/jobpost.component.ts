import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RecServiceService } from 'src/app/rec-service.service';

@Component({
  selector: 'app-jobpost',
  templateUrl: './jobpost.component.html',
  styleUrls: ['./jobpost.component.css']
})
export class JobpostComponent implements OnInit {

  postForm!:FormGroup;

  constructor( private formBuilder: FormBuilder, private userService: RecServiceService,private router:Router) { }

  ngOnInit(): void {
  
this.postForm = this.formBuilder.group({
    jobtitle:["",Validators.required],
    joblocation:["",Validators.required],
    jdesc:["",Validators.required],
    skills:["",Validators.required],
    recId:['']
  })
}
onPost() {
  if (this.postForm.valid) {
    this.postForm.controls['recId'].setValue(localStorage.getItem("recId"))
    this.userService.saveJobData(this.postForm.value).subscribe((result) => {
      // this.toast.success({ detail: 'Success!',summary: 'You have succesfully posted a job', duration: 3000 });

      this.postForm.reset({});
    })
  }
}
}