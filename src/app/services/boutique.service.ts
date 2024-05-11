import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Boutique } from '../models/Boutique';

@Injectable({
  providedIn: 'root'
})
export class BoutiqueService {
  private apiUrl = 'http://localhost:8081/api/boutiques';

  constructor(private http: HttpClient) { }
  // boutiques: Boutique[] = [
  //   new Boutique(1, 'azallad collection ', 'Address 1', '123456789', 'boutique1@example.com', 'assets/images/202403201050332181A.JPEG', '', ''),
  //   new Boutique(2, 'Beautiful Rose By Fati', 'Address 2', '987654321', 'boutique2@example.com', 'assets/images/202403201050542601A.JPEG', '', ''),
  //   new Boutique(3, 'beldiconcept', 'Address 1', '123456789', 'boutique1@example.com', 'assets/images/20240302152514866831A.JPEG', '', ''),
  //   new Boutique(4, 'Beldi FASHION ', 'Address 1', '123456789', 'boutique1@example.com', 'assets/images/202403201050332181A.JPEG', '', ''),
  //   new Boutique(5, 'Belamine Couture ', 'Address 3', '456789123', 'boutique3@example.com', 'assets/images/202403201050542601A.JPEG', '', ''),
  //   new Boutique(6, 'yarn collection ', 'Address 3', '456789123', 'boutique3@example.com', 'assets/images/20240302152514866831A.JPEG', '', ''),
  //   new Boutique(7, 'Boutique 3', 'Address 3', '456789123', 'boutique3@example.com', 'assets/images/20240207123950547715PBO.JPEG', '', ''),
  // ];


  findAll(): Observable<Boutique[]> {
    return this.http.get<Boutique[]>(this.apiUrl);
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
