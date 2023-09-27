import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servres',
  templateUrl: './servres.component.html',
  styleUrls: ['./servres.component.css']
})
export class ServresComponent implements OnInit{
  
  serverId: number=10;
  serverName:string="hp";
  allowNewserver= false;
  serverscreationstatus = 'server is not created';
  serverNames='developmement is done';
  userName ='';
  firstname="sameer";
  lastname="khaire";
  constructor() {
    setTimeout(()=>{
      this.allowNewserver=true;
    },2000);
  }
  ngOnInit() {
  }
 
  OnCreateServer(){
    this.serverscreationstatus='server is created !!!' + this.serverNames;
  }
  onUpdateServer(event:Event){
    this.serverNames= (<HTMLInputElement>event.target).value;
  }
  onsetr(){
     console.log(this.userName);

  }
  outputparent(){

  }
}
