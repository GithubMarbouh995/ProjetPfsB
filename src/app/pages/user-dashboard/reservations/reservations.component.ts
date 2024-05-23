import { Component, OnInit } from '@angular/core';
import { ReservationService } from 'src/app/services/reservation.service';
import { Reservation } from 'src/app/models/Reservation';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {
   Rerservations : Reservation[] = [];
    clientId: number = 0;
  constructor(private reservationService: ReservationService,private route: ActivatedRoute,private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.getIdClient();
  }

  getReservations(){
    this.reservationService.getByClient(this.clientId).subscribe(data => {
      this.Rerservations = data;
    });
  }
  
  getIdClient() {
    const email= localStorage.getItem('auth') || '';
    this.authService.getId(email).subscribe(
      data => {
        this.clientId = data;
        this.getReservations();
      }
    );
  }

  deleteReservation(id: number){
    this.reservationService.deleteById(id).subscribe(data => {
      this.getReservations();
    });
  }
}
