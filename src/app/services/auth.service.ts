import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators'
import { throwError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginUrl:string = 'https://api-core-dev.caronsale.de/api/v1/authentication/salesman@random.com'
  handleError(error: HttpErrorResponse){
    // console.log(error.message);
    return error.message;
    }
  constructor(private http:HttpClient) { }
  
    login(loginDetails: any):Observable<any> {

      return this.http.put(this.loginUrl, loginDetails, httpOptions)
                      .pipe(catchError(this.handleError));
    }
}
