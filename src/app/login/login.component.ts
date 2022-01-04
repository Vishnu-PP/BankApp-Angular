import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim="Your Perfect Banking Partner"

  
  acno=""
  pass=""
  loginForm = this.fb.group({
    acno:['',[Validators.required, Validators.pattern('[0-9]*')]],
    pass:['',[Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
  })
  constructor(private router:Router, private ds:DataService, private fb:FormBuilder) { }

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
    var acno = this.loginForm.value.acno
    var pass = this.loginForm.value.pass

    if(this.loginForm.valid){

     let result = this.ds.login(acno,pass)
     if(result){
       alert("login success")
       
       this.router.navigateByUrl('home')
    }
    }
    else{
      alert("invalid Form")
    }

    
    
  }

}
