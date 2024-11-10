import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '@model/Constant/product';
import { GRANITE_LIST, MARBLE_LIST, PACKING_LIST, STONES_LIST } from '@model/Constant/productList';
import { LanguageService } from '@service/shared/language.service';
import { SharedService } from '@service/shared/Shared.service';

@Component({
  selector: 'app-public-navbar',
  templateUrl: './public-navbar.component.html',
  styleUrls: ['./public-navbar.component.scss']
})
export class PublicNavbarComponent {
  currentLanguage!: string;
marbelList:any[]=MARBLE_LIST;
graniteList:any[]=GRANITE_LIST;
stonesList:any[]=STONES_LIST;
packingList:any[]=PACKING_LIST;
isSelected!:string;
languageList: any[] = [
  { name: 'English', image: 'assets/images/flags/en.png', value: 'en' },
  { name: 'Arabic', image: 'assets/images/flags/ar.png', value: 'ar' }
];
  constructor(
    private router: Router,
    private sharedService:SharedService,
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
goTo(location: string): void {
  window.location.hash = '';
  window.location.hash = location;
}
isChangeSelected(current:string){
  console.log(current);

  this.isSelected === current ? this.isSelected = '' : this.isSelected = current
}
scrollToAnchor(location: string): void {
  const element:Element | null = document.querySelector('#' + location);
  console.log(element);
  console.log(this.sharedService.isNotEmpty( element));

  if (this.sharedService.isNotEmpty( element)) {
    setTimeout(() => {
      const elementPosition = element!.getBoundingClientRect().top + window.scrollY;
      // Adjust the position with the offset (navbar height)
      const offsetPosition = elementPosition - 150;
      element!.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'})
    }, 100)
  }else{
    this.router.navigateByUrl('/');
    // this.scrollToAnchor(location);
  }
}
}
