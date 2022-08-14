import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginForm, RegisterForm } from '../types/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: Boolean = false;
  constructor(private router: Router) { }

  login(form: LoginForm) {
    this.isAuthenticated = true;
    this.router.navigate(['/']);
  }
  
  register(form: RegisterForm) {
    
  }
  
  logout() {
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }
}
