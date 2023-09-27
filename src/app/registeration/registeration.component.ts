import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit{
  myForm!:FormGroup
  constructor(private fb:FormBuilder) {

  }
  ngOnInit(): void {
   this.myForm=this.fb.group({
    FirstName:['',Validators.required],
    LastName:['',Validators.required]
   })
  }
  submitForm(){}

}
