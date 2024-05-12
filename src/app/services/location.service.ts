import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private apiUrl = 'http://localhost:8081'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) { }

  findAll(): Observable<any> {
    return this.http.get(`${this.apiUrl}/location`);
  }

  findById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/location/${id}`);
  }

  saveOrUpdate(location: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/location`, location);
  }

  deleteById(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/location/${id}`);
  }
}
