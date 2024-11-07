import { Component } from '@angular/core';
import { Granite_Catalog } from '@model/Constant/cataloge';
import { LanguageService } from '@service/shared/language.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-granite',
  templateUrl: './granite.component.html',
  styleUrls: ['./granite.component.scss']
})
export class GraniteComponent {

  graniteSlides:any[] =Granite_Catalog;
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
        400:{
            items:2
        },
        740:{
            items:3
        },
        940:{
            items:4
        }
        },
        rtl: this.LanguageService.currentLang === 'en' ? false : true
  };

  constructor(
    private LanguageService: LanguageService
  ) { }
}
