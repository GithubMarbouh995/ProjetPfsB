
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Import RouterModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitsBoutiqueComponent } from './produits-boutique/produits-boutique.component'; // Correct the path
import { HeaderComponent } from './composants/header/header.component';
import { PaginationComponent } from './composants/pagination/pagination.component';
import { FooterComponent } from './composants/footer/footer.component';
import { BoutiquePageComponent } from './pages/boutique-page/boutique-page.component';
import { BoutiqueCardComponent } from './composants/boutique-card/boutique-card.component';
import { BoutiqueDetailPageComponent } from './pages/boutique-detail-page/boutique-detail-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BoutiquePageComponent,
    BoutiqueCardComponent,
    PaginationComponent,
    ProduitsBoutiqueComponent,
    BoutiqueDetailPageComponent,   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
    RouterModule 
  ],
  providers: [],
  bootstrap: [AppComponent], 
   schemas: [CUSTOM_ELEMENTS_SCHEMA] // Add this line to suppress the 'router-outlet' error

})
export class AppModule { }

