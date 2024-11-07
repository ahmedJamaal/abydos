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

    let htmlTag = this.document.getElementsByTagName(
      'html'
    )[0] as HTMLHtmlElement;

    htmlTag.dir = this.LanguageService.currentLang === 'ar' ? 'rtl' : 'ltr';
    htmlTag.lang = this.LanguageService.currentLang;

    // this.router.events
    // .pipe(
    //   filter(e => e instanceof NavigationEnd),
    //   pairwise() // check it's second route load
    // )
    // .subscribe((e: any[]) => {
    //   window.scrollTo(0, 0);
    // });
  }

}
