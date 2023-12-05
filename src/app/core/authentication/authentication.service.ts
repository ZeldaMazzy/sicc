import { Injectable } from '@angular/core';
import { AuthenticationComponent } from './authentication.component';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { AuthenticationResponse } from './authentication-response.model';
import { User } from 'src/app/shared/user/user.model';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  private readonly loginURL: string = environment.firebaseLoginURL + environment.API_KEY;
  private readonly signupURL: string = environment.firebaseLoginURL + environment.API_KEY;
  currentuser: any;


constructor(private http: HttpClient, private router: Router) {}

public signUp(email: string, password: string): Observable<AuthenticationResponse> {
  const request: any = {
    email, password,
    returnSecureToken: true
  }

  return this.http.post<AuthenticationResponse>(this.signupURL, request)
  .pipe(tap(authenticationResponse => this.handleAuth(authenticationResponse)));
}

public signOut(): void {
  this.currentuser.next(null);
  this.router.navigate(["authentication"]);
}

public getUserDataFromStorage(): AuthenticationResponse | undefined {
  return JSON.parse(localStorage.getItem("UserData"));
}

public getAccessTokenFromStorage(): string {
  if(!localStorage.getItem("userData")) return "";
  const data = JSON.parse(localStorage.getItem("UserData"));
  return data.accessToken;
}

public handleAuth(authResponse: AuthenticationResponse): void {
  const {email, localId, idToken} = authResponse
  const expiresIn: number = Date.now() + +authResponse.expiresIn;
}
}

