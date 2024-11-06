import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '@model/Constant/product';
import { GRANITE_LIST, MARBLE_LIST, PACKING_LIST, STONES_LIST } from '@model/Constant/productList';
import { LanguageService } from '@service/shared/language.service';

@Component({
  selector: 'app-public-navbar',
  templateUrl: './public-navbar.component.html',
  styleUrls: ['./public-navbar.component.scss']
})
export class PublicNavbarComponent {
  currentLanguage!: string;
  url: string = 'assets/images/avatar/avatar.png';
marbelList:any[]=MARBLE_LIST;
graniteList:any[]=GRANITE_LIST;
stonesList:any[]=STONES_LIST;
packingList:any[]=PACKING_LIST;

languageList: any[] = [
  { name: 'English', image: 'assets/images/flags/en.png', value: 'en' },
  { name: 'Arabic', image: 'assets/images/flags/ar.png', value: 'ar' }
];
  constructor(
    private router: Router,
    public LanguageService: LanguageService
  ) {}
  ngOnInit(): void {
    this.currentLanguage = this.LanguageService.activeCurrentLanguage;
  }
  changeLanguage(language: string) {
    setTimeout(() => {
      window.location.reload();
      this.LanguageService.toggleLanguage(language);
    }, 1000);
}
}
