import { Component, OnInit } from '@angular/core';
//import { AuthService } from '../guard/auth.service';
import { AuthService } from '../services/auth.service';
import { SharingService } from '../services/sharing.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  displayName: string = "";
  // constructor(private userService: UserService,
  // ) {

  // }
  constructor(private userService: UserService, 
    private authService: AuthService,
    private router: Router,
    public afAuth: AngularFireAuth , 
    private sharingService: SharingService) {
    
    this.sharingService.isUserLoggedIn
    .subscribe(value => {
      if (value) {
        this.userService.getCurrentUser()
          .then(user => {
            this.displayName = user.displayName != null ? user.displayName : user.email
            console.log(this.displayName);
          }
          ).catch(e => { console.log(e); }
          );

      }
    })
  }



  ngOnInit() {

    this.userService.getCurrentUser()
      .then(user => this.displayName = user.displayName != null ? user.displayName : user.email);

    console.log(this.displayName);

  }
  logout() {
    this.authService.logout();
    location.href = "/";
  }

  chef(){
    this.router.navigate(["/admin/item-list"]);
    // location.href = "/item-list"
  }
  menu(){
    this.router.navigate(["/admin/"]);
    // location.href = "/item-list"
  }
}
