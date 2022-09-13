import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  signupForm!:FormGroup;
  listData:any;

  constructor(private fb:FormBuilder){

    this.listData = [];

    this.signupForm=this.fb.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      age:['',Validators.required],
      phone:['',Validators.required],
    })
  }

  public AddUser(): void{
    this.listData.push(this.signupForm.value)
    this.signupForm.reset();
  }
  Reset(){
    this.signupForm.reset()
  }
  RemoveItem(){
  }


  ngOnInit(){

  }
}
