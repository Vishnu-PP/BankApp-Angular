import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  amount=""
  acno=""
  pass=""

  amount1=""
  acno1=""
  pass1=""

  depositForm = this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pass:['',[Validators.required,Validators.pattern('[a-zA-z0-9]*')]],
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]]

  })

  withdrawForm = this.fb.group({
    acno1:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pass1:['',[Validators.required,Validators.pattern('[a-zA-z0-9]*')]],
    amount1:['',[Validators.required,Validators.pattern('[0-9]*')]]

  })

  user = this.ds.currentUserName

  constructor(private ds:DataService, private router:Router, private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  logOut(){
    this.router.navigateByUrl('')
  }

  deposit(){
    var amount=this.depositForm.value.amount
    var acno=this.depositForm.value.acno
    var pass=this.depositForm.value.pass

    if(this.depositForm.valid){

      let result=this.ds.deposit(amount,acno,pass)
      if(result){
        alert(amount+"credited..now balance is: "+ result)
      }
    }
    else{
      alert("invalid form")
    }

   
  }

  withdraw(){
    var amount=this.withdrawForm.value.amount1
    var acno=this.withdrawForm.value.acno1
    var pass=this.withdrawForm.value.pass1

    if(this.withdrawForm.valid){

      let result=this.ds.withdraw(amount,acno,pass)
      if(result){
        alert(amount+"debited..now balance is: "+ result)
      }
    }
    else{
      alert("invalid Form")
    }

   
  }

}
