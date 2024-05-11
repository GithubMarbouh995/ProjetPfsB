import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreneauEssayageService {
  private apiUrl = 'http://localhost:8081'; // Replace with your API's URL

  constructor(private http: HttpClient) { }

  save(creneauEssayage: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/creneauEssayage`, creneauEssayage);
  }

  update(creneauEssayage: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/creneauEssayage/${creneauEssayage.id}`, creneauEssayage);
  }

  deleteById(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/creneauEssayage/${id}`);
  }

  findById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/creneauEssayage/${id}`);
  }

  findAll(): Observable<any> {
    return this.http.get(`${this.apiUrl}/creneauEssayage`);
  }
}