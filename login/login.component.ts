import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  username:string="anwar";
  password:string;
  msg:string="";
  text:string=" Welcome";
  constructor() { }

  ngOnInit() {
  }
  login(){
    if(this.username === "anwar" && this.password === "anwar123"){
     this.msg ="login  success!!"
    }else{
      this.msg ="login  Fail!!"
    }
  }

}
