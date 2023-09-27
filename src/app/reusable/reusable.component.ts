import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reusable',
  templateUrl: './reusable.component.html',
  styleUrls: ['./reusable.component.css']
})
export class ReusableComponent implements OnInit{
  @Input()ddd !:FormGroup;
  errors: any[] = []
  ngOnInit(): void {

  }
  // @Input() userdetail:{}=[];
  // @Input()userdetail: {FirstName:string,LastName:string,EmailId:string,PhoneNumber:number}={FirstName:'',LastName:'',EmailId:'',PhoneNumber:0};
  generateErrorMessage(){
    Object.keys(this.ddd.controls).forEach(controlName => {
      let control = this.ddd.controls[controlName];
      let errors = control.errors;
      if (errors === null || errors['count'] === 0) {
        return;
      }
      // Handle the 'required' case
      if (errors['required']) {
        this.errors.push(`${controlName} is required`);
      }
      // Handle 'minlength' case
      if (errors['minlength']) {
        this.errors.push(`${controlName} minimum length is ${errors['minlength'].requiredLength}.`);
      }
      // Handle custom messages.
      if (errors['message']){
        this.errors.push(`${controlName} ${errors['message']}`);
      }
    });
  }

}
