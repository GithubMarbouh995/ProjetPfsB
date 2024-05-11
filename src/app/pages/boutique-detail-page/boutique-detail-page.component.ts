import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Boutique } from 'src/app/models/Boutique';
import { BoutiqueService } from 'src/app/services/boutique.service';

@Component({
  selector: 'app-boutique-detail-page',
  templateUrl: './boutique-detail-page.component.html',
  styleUrls: ['./boutique-detail-page.component.css']
})
export class BoutiqueDetailPageComponent implements OnInit {
  constructor(private boutiqueService: BoutiqueService, private activatedRoute: ActivatedRoute) { };
  boutique: Boutique = new Boutique(0, '', '', '', '', '', '', '');
  boutiques: Boutique[] = [
  ];
  ngOnInit() {
    let id = this.activatedRoute.snapshot.params['id'];
    this.boutiqueService.findAll().subscribe(data => {
      this.boutiques = data; this.boutique = this.getBoutiqueById(id) || new Boutique(0, '', '', '', '', '', '', '');
    });


  }
  getBoutiqueById(id: number) {

    return this.boutiques.find((boutique) => boutique.id == id);
  }
}
