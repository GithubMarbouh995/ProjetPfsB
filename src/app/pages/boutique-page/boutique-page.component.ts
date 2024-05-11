import { Component, OnInit } from '@angular/core';
import { Boutique } from 'src/app/models/Boutique';
import { BoutiqueService } from 'src/app/services/boutique.service';

@Component({
  selector: 'app-boutique-page',
  templateUrl: './boutique-page.component.html',
  styleUrls: ['./boutique-page.component.css']
})
export class BoutiquePageComponent implements OnInit {
  constructor(private boutiqueService: BoutiqueService) { };
  boutiques: Boutique[] = [
  ];
  ngOnInit() {
    this.boutiqueService.findAll().subscribe(data => {
      this.boutiques = data;
    });

  }

}
