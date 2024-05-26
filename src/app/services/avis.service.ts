import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvisService {
  private apiUrl = 'http://localhost:8081';

  constructor(private http: HttpClient) { }

  findAll(): Observable<any> {
    return this.http.get(`${this.apiUrl}/avis`);
  }

  findById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/avis/${id}`);
  }

  save(avis: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/avis/create`, { avis });
  }

  update(id: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/avis/${id}`, {});
  }

  delete(avis: any, boutique: any): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: { avis, boutique },
    };

    return this.http.request('delete', `${this.apiUrl}/avis`, options);
  }
}
