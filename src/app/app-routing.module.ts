import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { DetailArticleComponent } from './composants/detail-article/detail-article.component';
import { ModalComponent } from './composants/modal/modal.component';


const routes: Routes = [
  {path : '', component : PageHomeComponent},
  { path: 'inscription', component: PageInscriptionComponent },
  { path: 'login', component: PageLoginComponent },
  { path: 'article', component: DetailArticleComponent },
  { path: 'modal', component: ModalComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
