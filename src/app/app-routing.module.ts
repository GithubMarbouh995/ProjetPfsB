import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitsBoutiqueComponent } from './produits-boutique/produits-boutique.component';

const routes: Routes = [
  { path: 'boutique', component: ProduitsBoutiqueComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
