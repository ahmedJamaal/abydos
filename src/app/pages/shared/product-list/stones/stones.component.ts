import { Component } from '@angular/core';
import { Split_Catalog } from '@model/Constant/cataloge';
import { LanguageServiceService } from '@service/shared/language-service.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-stones',
  templateUrl: './stones.component.html',
  styleUrls: ['./stones.component.scss']
})
export class StonesComponent {

  StoneSlides:any[] =Split_Catalog;
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
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        },
        rtl: this.LanguageService.currentLang === 'en' ? false : true
  };

  constructor(
    private LanguageService: LanguageServiceService
  ) { }
}
