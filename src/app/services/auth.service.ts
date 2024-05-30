import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {environment} from "../../environments/environment";
import {ObservableInterface} from "../intefaces/observable.interface";
import {UserInterface} from "../intefaces/user.interface";

@Injectable(

)
export class AuthService {
  constructor(private http: HttpClient) {

  }

  setToken(response: any) {
    if(response){
      localStorage.setItem('fb-token', response.idToken);
    }
    else {
      localStorage.clear();
    }
  }

  login(user: UserInterface): Observable<ObservableInterface> {
    return this.http.post<any>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
      .pipe(
        tap(this.setToken)
      )
  }
}
