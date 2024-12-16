import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActiveFieldsService {

  private baseUrl = 'http://localhost:3000'; // Base URL of the Node.js API

  constructor(private http: HttpClient) {}

  // Method to fetch data from the API
  getActiveBusiness(limit:number): Observable<any> {
    return this.http.get(`${this.baseUrl}/active_business?limit=${limit}`);
  }

  getActivePeople(limit:number): Observable<any> {
    return this.http.get(`${this.baseUrl}/active_person?limit=${limit}`);
  }
}
