import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.css']
})
export class DetailArticleComponent implements OnInit {

  article: any;
  prix ?: string;
  taille ?: string;
  couleur ?: string;

  constructor() { }

  ngOnInit(): void {
    // Initialize product data
  }

  favoris(id: number, art: string): void {
    // Make API request to add to favorites
  }

  get_prix(pr: string): void {
    // Update prix variable
  }

  get_color(taille: string): void {
    // Update couleur variable
  }

  change_image(im: string): void {
    // Change image of the product
  }

}
