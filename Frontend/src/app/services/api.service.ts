import { Injectable } from '@angular/core';
import {  HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class ApiService {

  private loggedIn = false;
  private token = '';

  constructor(private http: HttpClient) {}

  private formatErrors(error: any) {
    const err = error.error ? error.error : error;
    console.log(err); /*verbose*/
    return [];
  }

  public isLoggedIn() {
    return this.loggedIn;
  }

  public setIsLoggedIn(state: boolean) {
     this.loggedIn = state;
  }

  createAuthHeaders(): HttpHeaders {
    return new HttpHeaders()
      .set('content-type', 'application/json')
      .set('auth-token', this.token);
  }

  setToken(token: string) {
    this.token = token;
    this.setIsLoggedIn(true);
  }

  get(path: string): Observable<any> {
    const headers = this.createAuthHeaders();
    return this.http.get(environment.api_url + path, {headers})
      .pipe(catchError(this.formatErrors));
  }

  post(path: string, body: object = {}): Observable<any> {
    const headers = this.createAuthHeaders();
    return this.http.post(environment.api_url + path, body, {headers})
      .pipe(catchError(this.formatErrors));
  }

  put(path: string, body: object = {}): Observable<any> {
    const headers = this.createAuthHeaders();
    return this.http.put(environment.api_url + path, body, {headers})
      .pipe(catchError(this.formatErrors));
  }

  delete(path: string): Observable<any> {
    const headers = this.createAuthHeaders();
    return this.http.delete(environment.api_url + path, {headers})
    .pipe(catchError(this.formatErrors));
  }
}
