import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produits-boutique',
  templateUrl: './produits-boutique.component.html',
  styleUrls:[ './produits-boutique.component.css']
})
export class ProduitsBoutiqueComponent {

  constructor(private route: ActivatedRoute){}

  Allproduits = [
    {
    "image" : "../../assets/images/20240209225327235763A.JPEG",
    "nom": 'Caftan Randa Maman Fille',
    "etat": 'Neuf',
    "prix": '1000'
    },
    {
      "image": '../../assets/images/20240209225327235763A.JPEG',
      "nom": 'Caftan Randa Maman Fille',
      "etat": 'Neuf',
      "prix": '1000'
      },
      {
        "image" : "../../assets/images/20240209225327235763A.JPEG",
        "nom": 'Caftan Randa Maman Fille',
        "etat": 'Neuf',
        "prix": '1000'
        },
        {
          "image" : "../../assets/images/20240209225327235763A.JPEG",
          "nom": 'Caftan Randa Maman Fille',
          "etat": 'Neuf',
          "prix": '1000'
          },
          {
            "image" : "../../assets/images/20240209225327235763A.JPEG",
            "nom": 'Caftan Randa Maman Fille',
            "etat": 'Neuf',
            "prix": '1000'
            },
            {
              "image" : "../../assets/images/20240209225327235763A.JPEG",
              "nom": 'Caftan Randa Maman Fille',
              "etat": 'Neuf',
              "prix": '1000'
              },
              {
                "image" : "../../assets/images/20240209225327235763A.JPEG",
                "nom": 'Test',
                "etat": 'Neuf',
                "prix": '1000'
                },
                {
                  "image" : "../../assets/images/20240209225327235763A.JPEG",
                  "nom": 'Caftan Randa Maman Fille',
                  "etat": 'Neuf',
                  "prix": '1000'
                  },
                  {
                    "image" : "../../assets/images/20240209225327235763A.JPEG",
                    "nom": 'Caftan Randa Maman Fille',
                    "etat": 'Neuf',
                    "prix": '1000'
                    }
    ]; 
    produits: any[]=[]// Liste des produits
  page: number = 1; // Page actuelle
  produitsParPage: number = 6; // Nombre de produits par page
// Injectez votre service de produits
ngOnInit() {
  this.getProduits();
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
    const startIndex = (this.page - 1) * this.produitsParPage;
    const endIndex = this.page * this.produitsParPage;
    this.produits = this.Allproduits.slice(startIndex, endIndex);
  }

}
