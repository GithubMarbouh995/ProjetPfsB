import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/services/produit.service';
import { Produit } from 'src/lvt-api/src/models/produit';
import { Router} from '@angular/router';
import { ImageprocessingService } from '../../services/imageprocessing.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent implements OnInit {

  Recents: Produit[] = [];

  constructor(private router : Router , private produitService : ProduitService, private imageService : ImageprocessingService) { }

  ngOnInit(): void {
    this.ProduitRecent();
  }

  ProduitRecent(){
    this.produitService.produitRecent().pipe(
      map((produits: Produit | Produit[]) => {
        if (Array.isArray(produits)) {
          return produits.map(produit => this.imageService.createImages(produit));
        } else {
          return [this.imageService.createImages(produits)];
        }
      })
    ).subscribe(data => {
      this.Recents = data;
      console.log("Produits");
      console.log(this.Recents);
    }, error => {
      console.error("Error fetching produit:", error);
    });
  }

  }

