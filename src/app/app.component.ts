import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  email: string;
  password: string;

  constructor(public authenticationService: AuthService) {}

  signUp() {
    this.authenticationService.SignUp(this.email, this.password);
    this.email = '';
    this.password = '';
  }

  signIn() {
    this.email = '';
    this.password = '';
  }

  signOut() {
    this.authenticationService.SignOut();
  }

}
