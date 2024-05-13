import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { DetailArticleComponent } from './composants/detail-article/detail-article.component';
import { ModalComponent } from './composants/modal/modal.component';
import {BoutiquePageComponent} from "./pages/boutique-page/boutique-page.component";
import {ProduitsBoutiqueComponent} from "./pages/produits-boutique/produits-boutique.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";



const routes: Routes = [
  {path : '', component : PageHomeComponent},
  { path: 'inscrire', component: PageInscriptionComponent },
  { path: 'login', component: PageLoginComponent },
  { path: 'article', component: DetailArticleComponent },
  { path: 'modal', component: ModalComponent },
  {path : 'boutique', component : BoutiquePageComponent},
  { path: 'produit', component: ProduitsBoutiqueComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'admin', component: DashboardComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

