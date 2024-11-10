import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Router, NavigationEnd, NavigationStart, RoutesRecognized } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Language, LanguageService } from '@service/shared/language.service';
import { Subscription , filter, pairwise} from 'rxjs';
// import 'rxjs/add/operator/filter';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router,
    public LanguageService: LanguageService,
    private TranslateService: TranslateService,

  ) { }

  ngOnInit() {

    const htmlTag = this.document.getElementsByTagName('html')[0] as HTMLHtmlElement;
    const body = this.document.getElementsByTagName('body')[0] as HTMLBodyElement;
// console.log(body);
// console.log(htmlTag);

    htmlTag.dir = this.LanguageService.currentLang === 'ar' ? 'rtl' : 'ltr';
    htmlTag.lang = this.LanguageService.currentLang;
    body.dir = this.LanguageService.currentLang === 'ar' ? 'rtl' : 'ltr';
    body.lang = this.LanguageService.currentLang;
  }

}
