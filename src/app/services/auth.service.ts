import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { LoginResponseInterface } from '../intefaces/login-response.interface';
import { UserInterface } from '../intefaces/user.interface';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  setToken(response: any) {
    if (response) {
      localStorage.setItem('fb-token', response.idToken);
    } else {
      localStorage.clear();
    }
  }

  login(user: UserInterface): Observable<LoginResponseInterface> {
    return this.http
      .post<LoginResponseInterface>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`,
        user,
      )
      .pipe(tap(this.setToken));
  }

  get token(): string | null {
    return localStorage.getItem('fb-token');
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  logout() {
    this.setToken(null);
  }
}
