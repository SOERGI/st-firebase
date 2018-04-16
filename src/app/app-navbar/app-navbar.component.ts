import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: 'app-navbar.component.html',
  styles: [],
  providers: [AuthService]
})
export class AppNavbarComponent implements OnInit {
  user;

  ngOnInit(): void {
  }

  constructor(public authService: AuthService) {
    this.authService.user.subscribe(user =>  {
      console.log('User: ' + user);
    });
  }

  onLogin() {
    this.authService.login().then((res) => {
      console.log('hooray: ' + res);
    }).catch((err) =>
      console.log(err)
    );
  }

  onLoginEmail() {
    this.authService.loginEmail('test@gmx.net', 'asdlfj23423!')
      .then((res) => {
      console.log('hooray: ' + res);
    }).catch((err) =>
      console.log(err)
    );
  }

  signUpEmail() {
    this.authService.signupEmail('test@gmx.net', 'asdlfj23423!')
      .then((res) => {
      console.log('hooray: ' + res);
    }).catch((err) =>
      console.log(err)
    );
  }

  onLogout() {
    this.authService.logout().then((res) => {
      console.log('hooray logout: ' + res);
    }).catch((err) =>
      console.log(err)
    );
  }

}
