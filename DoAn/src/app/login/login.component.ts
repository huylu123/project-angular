import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  signinForm: FormGroup;
  mail: FormControl;
  password: FormControl;

  constructor(
    public authService: AuthService,
    private router: Router,
    builder: FormBuilder
  ) {
    this.mail = new FormControl('', [Validators.required]);
    this.password = new FormControl('', [Validators.required]);
    this.signinForm = new FormGroup({
      mail: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
    this.signinForm = builder.group({
      mail: this.mail,
      password: this.password,
    });
  }

  ngOnInit() {
  }

  tryGoogleLogin() {
    this.authService.signinGmail().then(res => {
      this.router.navigate(["/admin"]);
      // location.href = "/item-list"
    }).catch(err => {
      console.log(err);
    })
  }

  tryFirebaseLogin() {
    this.authService.siginFirebase(this.mail.value, this.password.value).then(res => {
      // this.router.navigate(["/admin"]);
      location.href = "/admin"
    }).catch(err => {
      console.log('loi gi day',err);
    })
  }


  register(){
    this.router.navigate(["/register"]);
  }




}
