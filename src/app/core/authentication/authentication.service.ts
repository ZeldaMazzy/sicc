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


export class UserService {
  private userSubject = new BehaviorSubject<User | null>(null);

}

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


public getUserDataFromStorage(): User | undefined {
  const userData = localStorage.getItem("UserData");
  if (!userData) {
    return undefined;
  }
  return JSON.parse(userData);
}

public getAccessTokenFromStorage(): string {
  const userData = localStorage.getItem("UserData");
  if (!userData) return "";
  const data = JSON.parse(userData);
  return data.accessToken || "";
}

public handleAuth(authResponse: AuthenticationResponse): void {
  const {email, localId, idToken} = authResponse
  const expiresIn: number = Date.now() + +authResponse.expiresIn;
}
}

//Dont need get token from Storage
//crea te a behavious subject where it is user null uutuakuse ut yser null in auth Service