import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private fb!: FormBuilder ;
  registerForm: FormGroup;
  mail: FormControl;
  password: FormControl;
  constructor(private auth: AuthService,  builder: FormBuilder,
     private router: Router) {

    this.mail=new FormControl('',[Validators.required,Validators.email]);
    this.password=new FormControl('',[Validators.required,Validators.minLength(8)]);
    this.registerForm = new FormGroup({
      mail: new FormControl('',[Validators.required]),
      password : new FormControl('',[Validators.required]),


    })
    this.registerForm= builder.group({
      mail: this.mail,
      password: this.password,
    });



  }

  ngOnInit(): void {

  }
  onSubmit(){
    this.auth.signup(this.mail.value, this.password.value).then(res=>{console.log (res)});
    this.router.navigate(["/admin"]);
    // location.href = "/admin";

  }

}
