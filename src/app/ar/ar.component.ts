import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ar',
  templateUrl: './ar.component.html',
  styleUrls: ['./ar.component.css']
})
export class ARComponent implements OnInit {
   @Output() data1_=new EventEmitter<any>();
  @Input() data!:number
  ngOnInit(): void {

  }
  UserName:string="sameer";
  name:string='sam';
  Addme(i:string){
    console.log(i);
  }
  data_(){
   this.data1_.emit(this.data);
  }
}
