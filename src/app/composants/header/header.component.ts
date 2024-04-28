import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
    window.dataLayer = window.dataLayer || [];
    window.gtag('js', new Date());
    window.gtag('config', 'G-XXXXXXXXXX');
  }

}
