import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BoutiquePageComponent } from './pages/boutique-page/boutique-page.component';
import { BoutiqueCardComponent } from './components/boutique-card/boutique-card.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { BoutiqueDetailPageComponent } from './pages/boutique-detail-page/boutique-detail-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BoutiquePageComponent,
    BoutiqueCardComponent,
    PaginationComponent,
    BoutiqueDetailPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
