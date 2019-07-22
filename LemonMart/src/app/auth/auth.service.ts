import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { sign } from 'fake-jwt-sign'; // For fakeAuthProvider only
import * as decode from 'jwt-decode';

import { BehaviorSubject, Observable, of, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Role } from './role.enum';
import { IServerAuthResponse } from './iserver-auth-response';
import { IAuthStatus } from './iauth-status';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {
    // Fake login function to simulate roles
    this.authProvider = this.fakeAuthProvider;
    // Example of a real login call to server-side
    // this.authProvider = this.exampleAuthProvider
  }

  static defaultAuthStatus = {
    isAuthenticated: false,
    userRole: Role.None,
    userId: null
  };

  private readonly authProvider: (
    email: string,
    password: string
  ) => Observable<IServerAuthResponse>;

  authStatus = new BehaviorSubject<IAuthStatus>(AuthService.defaultAuthStatus);

  private fakeAuthProvider(email: string, password: string): Observable<IServerAuthResponse> {
      if (!email.toLowerCase().endsWith('@test.com')) {
        return observableThrowError('Failed to login! Email needs to end with @test.com.');
      }

      const authStatus = {
        isAuthenticated: true,
        userId: 'e4d1bc2ab25c',
        userRole: email.toLowerCase().includes('cashier') ? Role.Cashier
          : email.toLowerCase().includes('clerk') ? Role.Clerk
          : email.toLowerCase().includes('manager') ? Role.Manager : Role.None
      } as IAuthStatus;

      const authResponse = {
        accessToken: sign(authStatus, 'secret', {
          expiresIn: '1h',
          algorithm: 'none'
        })
      } as IServerAuthResponse;

      return of(authResponse);
  }
}
