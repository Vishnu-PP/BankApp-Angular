import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim="Your Perfect Banking Partner"
  acno=""
  pass=""
  users:any={
    1000:{acno:1000,uname:"vishnu",password:1000,balance:5000},
    1001:{acno:1001,uname:"vinu",password:1001,balance:5000},
    1002:{acno:1002,uname:"anu",password:1002,balance:5000}
  }

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  // acnoChange(event:any){
  //   this.acno = event.target.value
  //   console.log(this.acno);
    
  // }
  // passChange(event:any){
  //   this.pass = event.target.value
  //   console.log(this.pass);
    

  // }
  login(){
    var acno = this.acno
    var pass = this.pass

    let database = this.users

    if(acno in database){
      if(pass == database[acno]["password"]){
        alert("login success")
        this.router.navigateByUrl('home')

      }
      else{
        alert("incorrect password")
      }
    }
    else{
      alert("invalid account")
    }
    
  }

}
