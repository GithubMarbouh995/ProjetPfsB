import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from '../../services/produit.service';

@Component({
  selector: 'app-produits-boutique',
  templateUrl: './produits-boutique.component.html',
  styleUrls: ['./produits-boutique.component.css']
})
export class ProduitsBoutiqueComponent implements OnInit {

  produits: any[] = []; // Liste des produits
  page: number = 1; // Page actuelle
  produitsParPage: number = 6; // Nombre de produits par page

  constructor(private route: ActivatedRoute, private produitService: ProduitService) {}

  ngOnInit() {
    this.getProduits();
  }
  favoris(productId: number, elementId: string): void {
    // Add the product to the list of favorites
    // This is just a placeholder. Replace with your actual implementation.
    console.log(`Product ${productId} added to favorites`);

    // Change the image source to indicate that the product is favorited
    let element = document.getElementById(elementId) as HTMLImageElement;
    element.src = "../../assets/images/likefilled_1.png";
  }
  precedent() {
    if (this.page > 1) {
      this.page--;
      this.getProduits();
    }
  }

  suivant() {
    this.page++;
    this.getProduits();
  }

  getProduits() {
    this.produitService.getAllProduits().subscribe(data => {
      const startIndex = (this.page - 1) * this.produitsParPage;
      const endIndex = this.page * this.produitsParPage;
      this.produits = data.slice(startIndex, endIndex);
      console.log("Produits")
      console.log(this.produits);
    });
  }

  protected readonly HTMLElement = HTMLElement;
}
