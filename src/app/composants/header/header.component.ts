import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

interface Window {
  dataLayer: any[];
  gtag: (...args: any[]) => void;
}

declare let window: Window;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

   lang: String ='';

  constructor(private translateService: TranslateService) { }

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'fr';
  }

  ChangeLang(lang : any){
    const selectedLang = lang.target.getAttribute('data-lang');
    localStorage.setItem('lang', selectedLang);
    this.translateService.use(selectedLang);
  }
}
