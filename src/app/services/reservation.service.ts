import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private apiUrl = 'http://localhost:8081//api/v1'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) { }

  reserver(reservation: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/reservation`, reservation);
  }

  modifierReservation(reservation: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/reservation/${reservation.id}`, reservation);
  }

  annulerReservation(idReservation: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/reservation/${idReservation}`);
  }

  validerReservation(idUtilisateur: number, idArticle: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/reservation/valider/${idUtilisateur}/${idArticle}`, null);
  }

  refuserReservation(idUtilisateur: number, idArticle: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/reservation/refuser/${idUtilisateur}/${idArticle}`, null);
  }

  retirerReservation(idUtilisateur: number, idArticle: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/reservation/retirer/${idUtilisateur}/${idArticle}`, null);
  }



  retirerToutesReservations(): Observable<any> {
    return this.http.delete(`${this.apiUrl}/reservation/retirerToutes`);
  }

  validerToutesReservations(): Observable<any> {
    return this.http.put(`${this.apiUrl}/reservation/validerToutes`, null);
  }

  refuserToutesReservations(): Observable<any> {
    return this.http.put(`${this.apiUrl}/reservation/refuserToutes`, null);
  }

  retirerToutesReservationsValidees(): Observable<any> {
    return this.http.delete(`${this.apiUrl}/reservation/retirerToutesValidees`);
  }

  retirerToutesReservationsRefusees(): Observable<any> {
    return this.http.delete(`${this.apiUrl}/reservation/retirerToutesRefusees`);
  }

  retirerToutesReservationsEnAttente(): Observable<any> {
    return this.http.delete(`${this.apiUrl}/reservation/retirerToutesEnAttente`);
  }

  retirerToutesReservationsRetirees(): Observable<any> {
    return this.http.delete(`${this.apiUrl}/reservation/retirerToutesRetirees`);
  }

  getReservationsByUser(idUtilisateur: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/reservation/user/${idUtilisateur}`);
  }

  getReservations(): Observable<any> {
    return this.http.get(`${this.apiUrl}/reservation`);
  }
}
