import { Component } from '@angular/core';
import { map } from 'rxjs';
import { Boutique } from 'src/app/models/Boutique';
import { BoutiqueService } from 'src/app/services/boutique.service';
import { ImageprocessingService } from 'src/app/services/imageprocessing.service';


@Component({
  selector: 'app-boutique-page',
  templateUrl: './boutique-page.component.html',
  styleUrls: ['./boutique-page.component.css']
})
export class BoutiquePageComponent {
  constructor(private boutiqueService: BoutiqueService, private imageService: ImageprocessingService) { };
  boutiques: Boutique[] = [
  ];
  ngOnInit() {
    this.boutiqueService.findAll().pipe(
      map((boutiques: Boutique[]) => boutiques.map(boutique => this.imageService.createImagesBoutique(boutique)))
    ).subscribe(data => {
      this.boutiques = data;
    });

  }
  protected readonly HTMLElement = HTMLElement;
}
