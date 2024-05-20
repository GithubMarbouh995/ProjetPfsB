import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './composants/header/header.component';
import { PaginationComponent } from './composants/pagination/pagination.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { FooterComponent } from "./composants/footer/footer.component";
import { DetailArticleComponent } from './composants/detail-article/detail-article.component';
import { ModalComponent } from './composants/modal/modal.component';
import { FormsModule } from "@angular/forms";
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BoutiqueDetailComponent } from './composants/boutique-detail/boutique-detail.component';
import { BoutiqueCardComponent } from './composants/boutique-card/boutique-card.component';
import { ProduitsBoutiqueComponent } from './pages/produits-boutique/produits-boutique.component';
import { BoutiquePageComponent } from './pages/boutique-page/boutique-page.component';
import { BoutiqueDetailPageComponent } from "./pages/boutique-detail-page/boutique-detail-page.component";
import { HttpClientModule } from '@angular/common/http';
import { CommentaireComponent } from './pages/boutique-detail-page/commentaire/commentaire.component';
import { PageReservationComponent } from './pages/page-reservation/page-reservation.component';
import { PageRechercheComponent } from './pages/page-recherche/page-recherche.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { ReservationsComponent } from './pages/user-dashboard/reservations/reservations.component';
import { HistoriquesComponent } from './pages/user-dashboard/historiques/historiques.component';
import { ProfileComponent } from './pages/user-dashboard/profile/profile.component';
import { DevenirVendeurComponent } from './pages/user-dashboard/devenir-vendeur/devenir-vendeur.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalCreateBoutiqueComponent } from './composants/modal-create-boutique/modal-create-boutique.component';
import { MesProduitsComponent } from './pages/user-dashboard/vendeur/mes-produits/mes-produits.component';
import { MaBoutiqueComponent } from './pages/user-dashboard/vendeur/ma-boutique/ma-boutique.component';
import { ReservationAttenteComponent } from './pages/user-dashboard/reservation-attente/reservation-attente.component';
import { ReservationAttenteCardComponent } from './composants/reservation-attente-card/reservation-attente-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PaginationComponent,
    PageInscriptionComponent,
    PageLoginComponent,
    DetailArticleComponent,
    ModalComponent,
    PageHomeComponent,
    BoutiqueDetailComponent,
    BoutiqueCardComponent,
    ProduitsBoutiqueComponent,
    BoutiquePageComponent,
    BoutiqueDetailPageComponent,
    PageReservationComponent,
    CommentaireComponent,
    PageRechercheComponent,
    UserDashboardComponent,
    ReservationsComponent,
    HistoriquesComponent,
    ProfileComponent,
    DevenirVendeurComponent,
    ModalCreateBoutiqueComponent,
    MesProduitsComponent,
    MaBoutiqueComponent,
    ReservationAttenteComponent,
    ReservationAttenteCardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
