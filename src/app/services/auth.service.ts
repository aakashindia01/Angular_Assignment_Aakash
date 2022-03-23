import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
    
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  login({ password }: any): Observable<any> {
    if ( password === 'pass@123') {
      this.setToken('abcdefghijklmnopqrstuvwxyzff');
      return of({ password: 'pass@123', email: 'admin@gmail.com' });
    }
    return throwError(Error('Failed to login'));
  }
}