import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  username:string
  pass:string
  repass:string
  flag:boolean

  constructor(){
    this.username=""
  }
  ngOnInit(){
    if(this.pass==this.repass){
      this.flag=true
    }else{
      this.flag=false
    }
  }

}
