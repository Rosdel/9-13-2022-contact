import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule,FormControl } from '@angular/forms';

const td = document.querySelector(".thisTd");
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  suggestUserName() {
    const suggestedName = 'Superuser';
  }
  
  listData:any = [];
 constructor(){}
  signupForm=new FormGroup({
  firstname:new FormControl('',[Validators.required,Validators.maxLength(15),Validators.minLength(2), Validators.pattern("^[a-zA-Z]+$")]),
  lastname:new FormControl('',[Validators.required,Validators.maxLength(15),Validators.minLength(2), Validators.pattern("^[a-zA-Z]+$")]),
  age: new FormControl('',[Validators.required,Validators.maxLength(3),Validators.minLength(1),Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
  phone: new FormControl('',[Validators.required ,Validators.maxLength(13),Validators.minLength(10) ])
  })

   public AddUser(): void{
    this.listData.push(this.signupForm.value)

    this.signupForm.reset();
    
  }
   get firstname() {
    return this.signupForm.get('firstname');
  } 
  get lastname() {
    return this.signupForm.get('lastname');
  } 
  get age() {
    return this.signupForm.get('age');
  } 
  get phone() {
    return this.signupForm.get('phone');
  } 
 
  
  Reset(){
    this.signupForm.reset()
  }
  RemoveItem(){
  }


  ngOnInit(){

  }
  onSubmit(){
    console.log(this.signupForm.value);}
  
}
