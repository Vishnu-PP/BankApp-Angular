import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUserName:any
  currentAcno:any

  users:any={
    1000:{acno:1000,uname:"VISHNU",password:1000,balance:5000,transaction:[]},
    1001:{acno:1001,uname:"VINU",password:1001,balance:5000,transaction:[]},
    1002:{acno:1002,uname:"ANU",password:1002,balance:5000,transaction:[]}
  }


  constructor(private router:Router) {
    
    this.getDetails()
   }

   getTransaction(){

    return this.users[this.currentAcno].transaction
   }

  //to store in local storage 
  saveDetails(){
    if(this.users){
      localStorage.setItem("userDB",JSON.stringify(this.users))
    }
    if(this.currentUserName){
      localStorage.setItem("cUserName",JSON.stringify(this.currentUserName))
    }
    if(this.currentAcno){
      localStorage.setItem("cAcno",JSON.stringify(this.currentAcno))
    }
  }

  //get data from local storage
  getDetails(){
    if(localStorage.getItem("userDB")){
      this.users = JSON.parse(localStorage.getItem("userDB") || '')
    }
    if(localStorage.getItem("cUserName")){
      this.currentUserName = JSON.parse(localStorage.getItem("cUserName") || '')
    }
    if(localStorage.getItem("cAcno")){
      this.currentAcno = JSON.parse(localStorage.getItem("cAcno") || '')
    }
  }

  //registration
  register(acno:any,password:any,uname:any,){

    let db=this.users

    if(acno in db){
      return false
     
    }
    else{
      db[acno]={
        acno,
        uname,
        password,
        balance:2000,
        transaction:[]
      }
      this.saveDetails()
      // console.log(db);
      return true
      
      
    }

  }

  //login
  login(acno:any,password:any){

    let database=this.users

    if(acno in database){
      if(password == database[acno]["password"]){
        this.currentAcno = acno
        this.currentUserName =database[acno]["uname"]
        this.saveDetails()
        return true
        

      }
      else{
        alert("incorrect password")
        return false
        
      }
    }
    else{
      alert("invalid account")
      return false
    }
  }

  balance(){
    return this.users[this.currentAcno].balance
  }

  //deposit
  deposit(amt: any, acno: any, password: any) {

    var amount = parseInt(amt)
    let db = this.users
    if (acno in db) {

      if (password == db[acno]["password"]) {
        db[acno]["balance"] = db[acno]["balance"] + amount
        db[acno].transaction.push({amount:amount,Type:"Credit"})
        this.saveDetails()
        return db[acno]["balance"]

      }
      else {
        alert("incorrect password")
        return false
      }

    }
    else {
      alert("account doesnot exist")
      return false
    }
  }

  //withdraw
  withdraw(amt: any, acno: any, password: any) {
    var amount = parseInt(amt)
    let db = this.users
    if (acno in db) {

      if (password == db[acno]["password"]) {
        if(db[acno]["balance"]>amount){
          db[acno]["balance"] = db[acno]["balance"] - amount
          db[acno].transaction.push({amount:amount,Type:"Debit"})
          this.saveDetails()
          return db[acno]["balance"]
        }
        else{
          alert("insufficent balance")
          return false
        }
      
        

      }
      else {
        alert("incorrect password")
        return false
      }

    }
    else {
      alert("account doesnot exist")
      return false
    }

  }
}
