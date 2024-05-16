import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { DetailArticleComponent } from './composants/detail-article/detail-article.component';
import { ModalComponent } from './composants/modal/modal.component';
import { BoutiquePageComponent } from "./pages/boutique-page/boutique-page.component";
import { ProduitsBoutiqueComponent } from "./pages/produits-boutique/produits-boutique.component";
import { PageReservationComponent } from './pages/page-reservation/page-reservation.component';
import { BoutiqueDetailPageComponent } from './pages/boutique-detail-page/boutique-detail-page.component';
import { PageRechercheComponent } from './pages/page-recherche/page-recherche.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { ReservationService } from './services/reservation.service';
import { ReservationsComponent } from './pages/user-dashboard/reservations/reservations.component';
import { ProfileComponent } from './pages/user-dashboard/profile/profile.component';
import { HistoriquesComponent } from './pages/user-dashboard/historiques/historiques.component';
import { DevenirVendeurComponent } from './pages/user-dashboard/devenir-vendeur/devenir-vendeur.component';

const routes: Routes = [
  { path: '', component: PageHomeComponent },
  { path: 'inscrire', component: PageInscriptionComponent },
  { path: 'login', component: PageLoginComponent },
  { path: 'article/:id', component: DetailArticleComponent },
  { path: 'reservation/:id/modal', component: ModalComponent },
  { path: 'boutique', component: BoutiquePageComponent },
  { path: 'boutique/:id/produits', component: ProduitsBoutiqueComponent },
  { path: 'reservation/:id', component: PageReservationComponent },
  { path: 'boutiques/:id', component: BoutiqueDetailPageComponent },
  { path: 'recherche', component: PageRechercheComponent },
  {
    path: 'user-dashboard',
    component: UserDashboardComponent,
    children: [
      { path: 'reservations', component: ReservationsComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'historiques', component: HistoriquesComponent },
      { path: 'devenir-vendeur', component: DevenirVendeurComponent },
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

