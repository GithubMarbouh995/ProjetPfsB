import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Boutique } from 'src/app/models/Boutique';
import { BoutiqueService } from 'src/app/services/boutique.service';

@Component({
  selector: 'app-boutique-card',
  templateUrl: './boutique-card.component.html',
  styleUrls: ['./boutique-card.component.css']
})
export class BoutiqueCardComponent {
  constructor(private router: Router) { };
  @Input() boutique: Boutique = new Boutique(0, '', '', '', '', '', '', '');



}
