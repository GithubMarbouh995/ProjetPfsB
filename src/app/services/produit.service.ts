import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from '../../lvt-api/src/models/produit';
@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private apiUrl = 'http://localhost:8081/api/v1/produit';

  constructor(private http: HttpClient) { }

  ajouterProduit(produit: Produit): Observable<Produit> {
    return this.http.post<Produit>(`${this.apiUrl}/produit`, produit);
  }

  getAllProduits(): Observable<Produit[]> {
    return this.http.get<Produit[]>(`${this.apiUrl}/getAllProduits`);
  }

  supprimerProduit(id_produit: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/produit/${id_produit}`);
  }

  updateProduit(ProduitId: number, produit: Produit): Observable<Produit> {
    return this.http.put<Produit>(`${this.apiUrl}/produit/${ProduitId}`, produit);
  }

  getProduitsDispoPourCreneau(id_creneau: number): Observable<Produit[]> {
    return this.http.get<Produit[]>(`${this.apiUrl}/produit/creneau/${id_creneau}`);
  }

  getCreneauxPourProduit(id_produit: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/produit/${id_produit}/creneaux`);
  }
}
