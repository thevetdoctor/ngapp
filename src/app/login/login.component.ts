import { Component } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { Router } from '@angular/router';

@Component({
    templateUrl: './login.component.html',
    selector: 'app-login',
    styleUrls: ['./login.component.css']
})

export class Login {
    email = ''
    password = ''
    loginError = ''
    emailMissingInput = ''
    passwordMissingInput = ''

  constructor(private authService: AuthService, private router: Router) { }

    onSubmit() {
        if(!this.email) {
          this.emailMissingInput = 'Email is required'
          return;
        }
        if(!this.password) {
          this.passwordMissingInput = 'Password is required'
          return;
        }
        console.log(`${this.email}: ${this.password}`);
        this.authService.login({email: this.email, password: this.password}).subscribe(auth => {
            // console.log(auth);
            if(auth?.token) {
              this.router.navigate(['auctions'])
            } else {
              // console.log("Auth failed")
              this.loginError = 'Login failed'
              return;
            }
          });
        return;
    }
}