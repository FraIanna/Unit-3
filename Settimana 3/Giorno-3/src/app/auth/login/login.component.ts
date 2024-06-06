import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { iAuthData } from '../../Models/i-auth-data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  authData: iAuthData = {
    email: 'gadebype@mailinator.com',
    password: 'Pa$$w0rd!',
  };

  constructor(private authSvc: AuthService, private router: Router) {}

  login() {
    this.authSvc.login(this.authData).subscribe(() => {
      this.router.navigate(['/dashboard']);
    });
  }
}
