import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageprocessingService } from 'src/app/imageprocessing.service';
import { Boutique } from 'src/app/models/Boutique';
import { BoutiqueService } from 'src/app/services/boutique.service';

@Component({
  selector: 'app-ma-boutique',
  templateUrl: './ma-boutique.component.html',
  styleUrls: ['./ma-boutique.component.css']
})
export class MaBoutiqueComponent {



  constructor(private boutiqueService: BoutiqueService, private activatedRoute: ActivatedRoute, private imageService: ImageprocessingService) { };
  boutique: Boutique = new Boutique(0, '', '', '', '', '', '', 0, []);
  boutiques: Boutique[] = [
  ];
  ngOnInit() {
    this.boutiqueService.findAll().subscribe(data => {
      this.boutiques = data;
    });

  }
}
