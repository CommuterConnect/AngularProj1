import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Person } from 'src/assets/Person';
import {Personcls} from '../Personcls';
import { RegisterUserService } from '../register-user.service';
import { from } from 'rxjs';
import {AppRoutingModule} from '../app-routing.module';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  clkEvnt: boolean;
  deleMsg: boolean;

  constructor(private loginBuilder: FormBuilder, private _serviceForLogin: RegisterUserService, private myrout: AppRoutingModule) { }

  loginUserBuilder = this.loginBuilder.group({
    email:['', Validators.required],
    password:['', Validators.required]
  });

  PersonData: Personcls;
  
  ngOnInit(): void {    
  }
  ckeckVar: boolean;
  onLoginSubmit(){    
    //console.log(this.loginUserBuilder.value);    
    this._serviceForLogin.GetPersonByEmail(this.loginUserBuilder.value["email"])
      .subscribe(data => this.PersonData = data);          
    if (this.PersonData.password.match(this.loginUserBuilder.value["password"])) {
      console.log('success');
      this.ckeckVar=true;
      console.log(this.ckeckVar);
      
    } else {
      console.log('failed');
      this.ckeckVar=false;
      this.clkEvnt=true;
    }
  }
  deleteSts: boolean;
  ondelete(PersonData){
    console.log(PersonData["id"]);
    this._serviceForLogin.deletePerson(PersonData["id"])
      .subscribe(
        status => console.log(status)
      );

    this.deleteSts = true;    
    this.deleMsg = true;
    const deleteMsg = "Account deleted."
  }
  onUpdateSts: boolean;
  onUpdate(PersonData){
    this.onUpdateSts = true;
  }
 

}
