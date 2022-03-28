import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Router } from '@angular/router';
import { SharingService } from './sharing.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fauth: AngularFireAuth,
    private afAuth: AngularFireAuth,
    private router: Router,
    private dataSharingService: SharingService
  ) { }

  signup(email: string, password: string) {
    return new Promise<any>((resolve, reject) => {
      this.fauth.createUserWithEmailAndPassword(email, password)
        .then(res => {
          resolve(res);
        }, err => reject(err))
    })
  }
  async signinGmail() {
    var provider = new firebase.auth.GoogleAuthProvider();
    return await this.afAuth.signInWithPopup(provider)
      .then(res=>{
      console.log(" da dang nhap thanh cong");
      this.dataSharingService.isUserLoggedIn.next(true);
        //  this.router.navigate(['home']);
      })
  }
//   async login(email: string, password: string) {
//     var result = await this.afAuth.signInWithEmailAndPassword(email, password)
//     this.router.navigate(['admin/']);
// }

  //Tương tự viết hàm signin với tài khoản firebase như sau:
  siginFirebase(email: string, password: string) {
    return new Promise<any>((resolve, reject) => {
      this.fauth.signInWithEmailAndPassword(email, password)
      .then(res => {       
     
      resolve(res);
      this.dataSharingService.isUserLoggedIn.next(true);
      }, err => reject(err))
    })
  }
  // logout() {
  //   this.afAuth.currentUser.then(res => {
  //     this.afAuth.signOut();
  //   })
  // }
  logout() {
    return new Promise<any>(async (resolve, reject) => {
      if (await this.afAuth.currentUser) {
        //if (this.fauth.auth.currentUser){
        this.afAuth.signOut();
        resolve("log out");
      } else {
        reject();
      }

    })
  }
  getCurrentUser() {
    return new Promise<any>((resolve, reject) => {
      var user = this.afAuth.onAuthStateChanged(function (user) {
        if (user) {
          resolve(user);
        } else {
          reject('No user logged in');
        }
      })
    })
  }
}