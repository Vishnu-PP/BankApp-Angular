import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  uname=""
  acno=""
  pass=""

  registerForm = this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pass:['',[Validators.required,Validators.pattern('[a-zA-z0-9]*')]]

  })

  constructor(private ds:DataService,private fb: FormBuilder, private router:Router ) { }

  ngOnInit(): void {
  }

  register(){
    
    // if(this.registerForm.get('uname')?.errors){
    //   alert("invalid username")
    // }

    if(this.registerForm.valid){
     var uname=this.registerForm.value.uname
     var acno=this.registerForm.value.acno
     var pass=this.registerForm.value.pass

     let result=this.ds.register(acno,pass,uname)

     if(result){
      alert("Account Registered")
      this.router.navigateByUrl("")
     }
     else{
      alert("Account Exist")
     }
    }
    else{
     alert("invalid form")
    }

    
   
  }

}
