import { Component, Input } from '@angular/core';
import { Boutique } from 'src/app/models/Boutique';

@Component({
  selector: 'app-boutique-card',
  templateUrl: './boutique-card.component.html',
  styleUrls: ['./boutique-card.component.css']
})
export class BoutiqueCardComponent {
  @Input() boutique ?: Boutique;
}
