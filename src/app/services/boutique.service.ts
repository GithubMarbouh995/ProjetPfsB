import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoutiqueService {
  private apiUrl = 'http://localhost:8081/api'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) { }

  findAll(): Observable<any> {
    return this.http.get(`${this.apiUrl}/boutiques`);
  }

  findById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/boutiques/${id}`);
  }

  saveOrUpdate(boutique: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/boutiques`, boutique);
  }

  deleteById(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/boutiques/${id}`);
  }

  getAllProduitsFromBoutique(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/boutiques/${id}/produit`);
  }
  
}
