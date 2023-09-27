import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit{
  userForm!:FormGroup;
  Data:any[]=[];
  constructor(private fb:FormBuilder) {

  }
  ngOnInit(): void {
    this.userForm=this.fb.group({
      FirstName:['', Validators.required],
      LastName:['',Validators.required],
      EmailId:['',[Validators.email]],
      PhoneNumber:['',Validators.required]
    })
    this.userForm.get('FirstName')?.statusChanges.subscribe(x=>{
      console.log(x);
    })
  }
  myreusable(){
   this.Data.push(this.userForm.value);
   console.log(this.userForm.value);
  }

}
