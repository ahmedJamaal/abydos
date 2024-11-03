import { Component } from '@angular/core';
import { Router, NavigationEnd, NavigationStart, RoutesRecognized } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Language, LanguageServiceService } from '@service/shared/language-service.service';
import { Subscription , filter, pairwise} from 'rxjs';
// import 'rxjs/add/operator/filter';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private router: Router,
    private lanS: LanguageServiceService,
    private TranslateService: TranslateService,
  ) { }

  ngOnInit() {



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
