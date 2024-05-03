import { Component } from '@angular/core';
import { Boutique } from 'src/app/models/Boutique';

@Component({
  selector: 'app-boutique-page',
  templateUrl: './boutique-page.component.html',
  styleUrls: ['./boutique-page.component.css']
})
export class BoutiquePageComponent {
 
boutiques: Boutique[] = [
  new Boutique(1, 'azallad collection ', 'Address 1', '123456789', 'boutique1@example.com','assets/images/20240209100814486801PBO.JPEG'),
  new Boutique(2, 'Beautiful Rose By Fati', 'Address 2', '987654321', 'boutique2@example.com','assets/images/20240108153600430433PBO.JPEG'),
  new Boutique(3, 'beldiconcept', 'Address 1', '123456789', 'boutique1@example.com','assets/images/20240325231008585861PBO.JPEG'),
  new Boutique(4, 'Beldi FASHION ', 'Address 1', '123456789', 'boutique1@example.com','assets/images/202403031630019871204PBO.JPEG'),
  new Boutique(5, 'Belamine Couture ', 'Address 3', '456789123', 'boutique3@example.com','assets/images/202404042043539421312PBO.JPEG'),
  new Boutique(6, 'yarn collection ', 'Address 3', '456789123', 'boutique3@example.com','assets/images/20240211115756024936PBO.JPEG'),
  new Boutique(7, 'Boutique 3', 'Address 3', '456789123', 'boutique3@example.com','assets/images/20240207123950547715PBO.JPEG'),
];
}
