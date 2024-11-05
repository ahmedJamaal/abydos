import { Component } from '@angular/core';
import { Marble_Catalog } from '@model/Constant/cataloge';
import { LanguageServiceService } from '@service/shared/language-service.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-marbel',
  templateUrl: './marbel.component.html',
  styleUrls: ['./marbel.component.scss']
})
export class MarbelComponent {
  marbelSlides:any[] =Marble_Catalog;
  customOptions: OwlOptions = {
    autoplay: false,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText :  this.LanguageService.currentLang === 'en' ? [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ] : [
          '<i class="bi bi-chevron-right"></i>',
          '<i class="bi bi-chevron-left"></i>'
        ],
        responsive: {
			0:{
                items:2
            },
            576:{
                items:3
            },
            768:{
                items:3
            },
            992:{
                items:4
            }
        },
        rtl: this.LanguageService.currentLang === 'en' ? false : true
  };

  constructor(
    private LanguageService: LanguageServiceService
  ) { }
}
