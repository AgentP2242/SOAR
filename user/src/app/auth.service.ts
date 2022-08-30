import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 loginUrl:string='';
 signUpUrl:string='';

  constructor(private http:HttpClient) {
    this.loginUrl="http://localhost:8080/auth/login";
    this.signUpUrl="http://localhost:8080/auth/register";
   }
   login(employee:Employee):Observable<any>{
    return this.http.post<any>(this.loginUrl,employee);
   }
   signUp(employee:Employee):Observable<any>{
    console.log(employee);
    return this.http.post<any>(this.signUpUrl,employee);
   }


}
