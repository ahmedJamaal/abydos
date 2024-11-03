import { Component } from '@angular/core';
import { LanguageServiceService } from '@service/shared/language-service.service';

@Component({
  selector: 'app-language-select',
  templateUrl: './language-select.component.html',
  styleUrls: ['./language-select.component.scss']
})
export class LanguageSelectComponent {
  currentLanguage!: string;
  languageList: any[] = [
    { name: 'English', image: 'assets/images/flags/en.png', value: 'en' },
    { name: 'Arabic', image: 'assets/images/flags/ar.png', value: 'ar' }
  ];
  constructor(
    public LanguageService: LanguageServiceService,

  ) {
    this.currentLanguage = this.LanguageService.currentLang;
  }
  changeLanguage(language: string) {
    setTimeout(() => {
      window.location.reload();
      this.LanguageService.toggleLanguage(language);
    }, 1000);
  }
}

