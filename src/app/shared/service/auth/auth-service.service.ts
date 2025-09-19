import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'x-api-key': 'reqres-free-v1',
  });

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http
      .post(
        'https://reqres.in/api/login',
        { email, password },
        { headers: this.headers }
      )
      .pipe(tap((response: any) => this.setToken(response.token)));
  }

  register(email: string, password: string) {
    return this.http
      .post(
        'https://reqres.in/api/register',
        { email, password },
        { headers: this.headers }
      )
      .pipe(
        tap((res: any) => {
          this.setToken(res.token);
        })
      );
  }

  logout() {
    localStorage.removeItem('token');
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return !!this.getToken();
  }
}
