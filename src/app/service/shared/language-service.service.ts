import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
export enum Language {
  arabic = 'ar',
  english = 'en',
}
@Injectable({
  providedIn: 'root',
})
export class LanguageServiceService {
  private localStorageKey: string = `${environment.CurrentLang}`;
  currentLang: string = Language.arabic;
  constructor(public translate: TranslateService) {
    

    this.translate.addLangs([Language.english, Language.arabic]);

    const theme: any = localStorage.getItem(environment.CurrentLang);


    if (theme) {
      this.currentLang = JSON.parse(theme);
    } else {
      this.currentLang = Language.arabic;
      localStorage.setItem(
        environment.CurrentLang,
        JSON.stringify(Language.arabic)
      );
    }
    this.translate.setDefaultLang(this.currentLang);
    

  }
  public get activeCurrentLanguage(): string {
    return this.currentLang;
  }

  public toggleLanguage(lang: string): void {
    localStorage.setItem(environment.CurrentLang, JSON.stringify(lang));
    this.translate.use(lang);
  }

  private reverseLanguage(language: string): Language {
    return language === Language.english ? Language.arabic : Language.english;
  }
}
