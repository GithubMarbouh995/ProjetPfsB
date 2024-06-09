import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { DetailArticleComponent } from './composants/detail-article/detail-article.component';
import { ModalComponent } from './composants/modal/modal.component';
import {BoutiquePageComponent} from "./pages/boutique-page/boutique-page.component";
import {ProduitsBoutiqueComponent} from "./pages/produits-boutique/produits-boutique.component";
import { PageReservationComponent } from './pages/page-reservation/page-reservation.component';
import { BoutiqueDetailPageComponent } from './pages/boutique-detail-page/boutique-detail-page.component';
import { PageRechercheComponent } from './pages/page-recherche/page-recherche.component';
import { LocationComponent } from './composants/location/location.component';
import { ReservationComponent } from './composants/reservation/reservation.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PageNouveauteComponent } from './pages/page-nouveaute/page-nouveaute.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { DevenirVendeurComponent } from './pages/user-dashboard/devenir-vendeur/devenir-vendeur.component';
import { HistoriquesComponent } from './pages/user-dashboard/historiques/historiques.component';
import { ReservationAttenteComponent } from './pages/user-dashboard/reservation-attente/reservation-attente.component';
import { ReservationsComponent } from './pages/user-dashboard/reservations/reservations.component';
import { MesProduitsComponent } from './pages/user-dashboard/vendeur/mes-produits/mes-produits.component';
import { MaBoutiqueComponent } from './pages/user-dashboard/vendeur/ma-boutique/ma-boutique.component';
import { LocationsComponent } from './pages/user-dashboard/locations/locations.component';
import { LocationAttenteComponent } from './pages/user-dashboard/location-attente/location-attente.component';
import { SupprimerClientComponent } from './pages/user-dashboard/supprimer-client/supprimer-client.component';


const routes: Routes = [
  {path : '', component : PageHomeComponent},
  { path: 'inscrire', component: PageInscriptionComponent },
  { path: 'login', component: PageLoginComponent },
  { path: 'article/:id', component: DetailArticleComponent },
  { path: 'reservation/:id/modal', component: ModalComponent },
  { path: 'boutique', component: BoutiquePageComponent },
  { path: 'boutique/:id/produits', component: ProduitsBoutiqueComponent },
  { path: 'boutiques/:id', component: BoutiqueDetailPageComponent },
  { path: 'recherche', component: PageRechercheComponent },
  { path: 'location/:id', component: LocationComponent},
  {path: 'reservation/:id', component: ReservationComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'new', component: PageNouveauteComponent},
  {
    path: 'user-dashboard',
    component: UserDashboardComponent,
    children: [
      { path: 'reservations', component: ReservationsComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'historiques', component: HistoriquesComponent },
      { path: 'devenir-vendeur', component: DevenirVendeurComponent },
      { path: 'produits', component: MesProduitsComponent },
      { path: 'boutique', component: MaBoutiqueComponent },
      { path: 'reservationsEnAttente', component: ReservationAttenteComponent },
      { path: 'locations', component: LocationsComponent },
      { path: 'locationsEnAttente', component: LocationAttenteComponent},
      { path: 'clients', component: SupprimerClientComponent},
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

