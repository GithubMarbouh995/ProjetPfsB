import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './composants/header/header.component';
import { PaginationComponent } from './composants/pagination/pagination.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import {FooterComponent} from "./composants/footer/footer.component";
import { DetailArticleComponent } from './composants/detail-article/detail-article.component';
import { ModalComponent } from './composants/modal/modal.component';
import {FormsModule} from "@angular/forms";
import { PageHomeComponent } from './pages/page-home/page-home.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import  { BoutiqueDetailComponent } from './composants/boutique-detail/boutique-detail.component';
import { BoutiqueCardComponent } from './composants/boutique-card/boutique-card.component';
import { ProduitsBoutiqueComponent } from './pages/produits-boutique/produits-boutique.component';
import { BoutiquePageComponent } from './pages/boutique-page/boutique-page.component';
import {BoutiqueDetailPageComponent} from "./pages/boutique-detail-page/boutique-detail-page.component";
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './pages/profile/profile.component';
import {ReportsComponent} from "./composants/reports/reports.component";
import {UsersComponent} from "./composants/users/users.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";

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
    ProfileComponent,
    ReportsComponent,
    UsersComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
