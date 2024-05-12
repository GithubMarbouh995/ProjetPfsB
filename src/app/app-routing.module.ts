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


const routes: Routes = [
  {path : '', component : PageHomeComponent},
  { path: 'inscrire', component: PageInscriptionComponent },
  { path: 'login', component: PageLoginComponent },
  { path: 'article/:id', component: DetailArticleComponent },
  { path: 'reservation/:id/modal', component: ModalComponent },
  { path: 'boutique', component: BoutiquePageComponent },
  { path: 'boutique/:id/produits', component: ProduitsBoutiqueComponent },
  { path: 'reservation/:id', component: PageReservationComponent },
  { path: 'boutiques/:id', component: BoutiqueDetailPageComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

