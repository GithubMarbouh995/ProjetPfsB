import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AvisService } from 'src/app/services/avis.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.css']
})
export class CommentaireComponent implements OnInit {
  commentaire: string = '';
  @Input() id_boutique: number = 0;
  id_client: number = 0;

  constructor(private authService: AuthenticationService, private avisService: AvisService, private router: Router, private location: Location) { } // Inject the Location module
  // constructor(private authService: AuthenticationService, private avisService: AvisService, private router: Router) { }
  ngOnInit() {
    this.getClientId();
  }

  getClientId() {
    this.authService.getId(localStorage.getItem('auth') || '').subscribe(
      data => {
        this.id_client = data;
      }
    );
  }

  ajouterCommentaire() {
    this.avisService.createAvis(this.commentaire, this.id_boutique, this.id_client).subscribe(
      data => {
        console.log(data);
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate([decodeURI(this.location.path())]);
        });
      }
    );
  }
}
