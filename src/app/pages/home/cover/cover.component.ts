import { Component } from '@angular/core';
import { LanguageServiceService } from '@service/shared/language-service.service';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss']
})
export class CoverComponent {
  images:any[]=[
    // {name:"cover-0",image:"carousel-1.jpg"},
    // {name:"cover-1",image:"cover-11.png"},
    // {name:"cover-2",image:"cover-21.png"},
    // {name:"cover-3",image:"cover-31.png"},

    {name:"cover-1",image:"cover-11.png" , text:'cover_txt1'},

    {name:"cover-2",image:"cover-21.png" , text:'cover_txt2'},
    {name:"cover-3",image:"cover-31.png" , text:''},

  ]
  constructor(
    private LanguageService: LanguageServiceService
  ) {}
  customOptions: OwlOptions = {
    autoplay: true,
    lazyLoad:true,
    smartSpeed: 1000,
    margin: 25,
    items:1,
    loop: true,
    center: true,
    dots: false,
    nav: false,
    autoHeight: false,
    rtl: this.LanguageService.currentLang === 'en' ? false : true


  };
  getData(data: SlidesOutputData) {

  }
  getImage(src:string){
    // return `assets/images/bk/${src}`
    return `assets/images/bk/${src}`
  }
}
