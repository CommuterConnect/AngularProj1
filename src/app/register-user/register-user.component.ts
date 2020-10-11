import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordMatch } from '../shared/password.match';
import {RegisterUserService} from '../register-user.service';
import { error } from 'console';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
    
  constructor(private frmBuilder: FormBuilder, private _registrationService: RegisterUserService) { }

  registerUserForm = this.frmBuilder.group({
    firstName: ['', [Validators.required]],
    lastName: ['',Validators.required],
    email:['', Validators.required],
    password:['', Validators.required],
    confirmPassword:['', Validators.required],
    gender:['']
  },{validator: passwordMatch});

  ngOnInit(): void {
  }
  registerModel = this.registerUserForm.value;
  public msgDis;
  onSubmit(){
    // console.log(this.registerUserForm.value);
    console.log({firstName: this.registerUserForm.value["firstName"], 
    lastName: this.registerUserForm.value["lastName"], email: this.registerUserForm.value["email"],
    password: this.registerUserForm.value["password"], gender: this.registerUserForm.value["gender"]});
    //service
    this._registrationService.register({firstName: this.registerUserForm.value["firstName"], 
    lastName: this.registerUserForm.value["lastName"], email: this.registerUserForm.value["email"],
    password: this.registerUserForm.value["password"], gender: this.registerUserForm.value["gender"]})
      .subscribe(
        Response => console.log('Success..', Response),
        error => console.error('Error..', error)    
      );
      this.msgDis = "Registration Success."
  }

}
