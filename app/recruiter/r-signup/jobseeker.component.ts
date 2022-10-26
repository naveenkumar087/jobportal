import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RecServiceService } from 'src/app/rec-service.service';


@Component({
  selector: 'app-signup',
  templateUrl: './jobseeker.component.html',
  styleUrls: ['./jobseeker.component.css']
})
export class JobseekerComponent implements OnInit {
   
  registerForm!:FormGroup;
  isSubmitted: boolean = false;
  recData: any=[];
  active=1;
  
  
  constructor(private formBuilder: FormBuilder, private userService: RecServiceService,private router:Router ,private toast:ToastrService) { }

  ngOnInit(): void {

    
    this.userService.getrecData().subscribe((result) => {
      console.log(result);
      this.recData = result;
    })
    this.registerForm = this.formBuilder.group({
      fname: ["", [Validators.required, Validators.minLength(5)]],
      lname: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%#?&])[A-Za-z\d@$!%*#?&]{8,}$/)]],
      phone: ['', [Validators.required, Validators.pattern(/(7|8|9)\d{9,9}$/)]],
      type: ['', [Validators.required]],
      dob : ['',[Validators.required]],
      
    })
  
  }

  onDateSelect(event: any) {
    console.log(event)
    const date = new Date(event.year, event.month - 1, event.day);
    console.log(date)
  }
  collectUser() {
    // debugger
    
    if (this.registerForm.valid) {
      if (this.recData.some((item: any) => item.email === this.registerForm.controls['email'].value)) {
        alert('User already exists');
        return;
      }
      const date = new Date(this.registerForm.controls['dob'].value.year, this.registerForm.controls['dob'].value.month-1, this.registerForm.controls['dob'].value.day);
      this.registerForm.controls['dob'].setValue(date)
      this.userService.saveRec (this.registerForm.value).subscribe((result) => {
        this.isSubmitted = true;
        this.toast.success('You have Successfully registered');
        this.registerForm.reset({});
        this.router.navigate(['/recruiter/rec-login'])
      })
    }

  }

  closeAlert() {
    this.isSubmitted = false;
  }
  changetab(){
    this.active=2;
  }

  

}