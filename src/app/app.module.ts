import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BoutiquePageComponent } from './pages/boutique-page/boutique-page.component';
import { BoutiqueCardComponent } from './components/boutique-card/boutique-card.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { BoutiqueDetailComponent } from './components/boutique-detail/boutique-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BoutiquePageComponent,
    BoutiqueCardComponent,
    PaginationComponent,
    BoutiqueDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
