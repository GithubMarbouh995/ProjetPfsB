import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Boutique } from 'src/app/models/Boutique';
import { AvisService } from 'src/app/services/avis.service';
import { BoutiqueService } from 'src/app/services/boutique.service';
import { Avis } from 'src/lvt-api/src/models/avis';

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.css']
})
export class CommentaireComponent {
  comment: string = '';
  boutique: Boutique = new Boutique(0, '', '', '', '', '', '', {}, []);

  constructor(private http: HttpClient, private avisService: AvisService, private boutiqueService: BoutiqueService) { }

  sendComment() {


    console.log("Commentaire: " + this.comment);

    this.boutiqueService.findById(1).subscribe(
      (data: Boutique) => {
        this.boutique = data;
        console.log(this.boutique);

        this.avisService.save(new Avis(1, this.comment, 2, this.boutique));
      },
      (error) => {
        console.error('Error:', error);
      }
    );

  }
}
