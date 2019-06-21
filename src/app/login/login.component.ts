import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../user-info.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  email:string="anwar";
  password:string;
  msg:string="";
  userList ;

  constructor(private userInfoService:UserInfoService) { 
  }

  ngOnInit() {
      this.userInfoService.getUserInfo().subscribe(data =>{
      this.userList= data;
      console.log(this.userList);
    },
    error => {
      console.log(error);
    })
  }

  login(){
    for(let i=0; i < this.userList.length;i++){
     let user=this.userList[i];
     if(this.email === user.email && this.password === user.name){
      this.msg ="login  success!!";
      break;
     }else{
       this.msg ="login  Fail!!";
     }
    }
   
  }

}
