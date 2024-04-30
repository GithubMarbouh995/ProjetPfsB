import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoutiquePageComponent } from './pages/boutique-page/boutique-page.component';
import { BoutiqueDetailPageComponent } from './pages/boutique-detail-page/boutique-detail-page.component';

const routes: Routes = [
  {path : '', component : BoutiquePageComponent},
  {path : 'boutique', component : BoutiquePageComponent},
  {path : 'boutique/id', component : BoutiqueDetailPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
