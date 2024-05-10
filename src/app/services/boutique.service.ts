import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoutiqueService {
  private apiUrl = 'http://localhost:8081'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) { }

  findAll(): Observable<any> {
    return this.http.get(`${this.apiUrl}/boutique`);
  }

  findById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/boutique/${id}`);
  }

  saveOrUpdate(boutique: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/boutique`, boutique);
  }

  deleteById(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/boutique/${id}`);
  }
}
