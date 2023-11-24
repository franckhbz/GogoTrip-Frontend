import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicationsService {
  private apiUrl = 'http://3.15.157.205/api/v1/publications';

  constructor(private http: HttpClient) {}

  getPublications(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    return this.http.get<any>(this.apiUrl, { headers });
  }
}
