import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private registerUrl = 'http://3.15.157.205/auth/signup'; // URL para el registro

  constructor(private http: HttpClient) {}
  login(email: string, password: string): Observable<any> {
    return this.http.post<any>('http://3.15.157.205/auth/signin', { email, password });
  }


  register(user: any) {
    return this.http.post(this.registerUrl, user);
  }
}

