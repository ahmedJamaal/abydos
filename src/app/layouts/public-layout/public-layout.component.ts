import { Component, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { environment } from '@environments/environment';
import { LanguageServiceService } from '@service/shared/language-service.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-public-layout',
  templateUrl: './public-layout.component.html',
  styleUrls: ['./public-layout.component.scss']
})
export class PublicLayoutComponent {
  innerWidth: any;
  currentLanguage: string = '';
isShowBackTop:boolean = false;
currentRoute: string = '';
  constructor(
    public LanguageService: LanguageServiceService,
    private router: Router,
    private titleService: Title,
  ) {
    this.currentLanguage = this.LanguageService.activeCurrentLanguage;
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.changeTitle();
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {

    // window.innerWidth < 993
    //   ? (this.isMobileView = true)
    //   : (this.isMobileView = false);
    this.innerWidth = window.innerWidth;
  }
  @HostListener("window:scroll", [])
  onWindowScroll() {
      if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 559) {
          this.isShowBackTop = true;
      }
     else if (this.isShowBackTop && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
          this.isShowBackTop = false;
      }
  }
  scrollToTop() {
    window.scroll(0,0);
  }
  changeTitle() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.currentRoute = this.router.routerState.snapshot.url;
        const moduleName = this.currentRoute.substring(1).split('/');

        if (moduleName.length === 2)
          this.titleService.setTitle(
            `${environment.App_Name} | ${moduleName[0]} Module - ${moduleName[1]}`
          );
        else if (moduleName.length === 1)
          this.titleService.setTitle(
            `${environment.App_Name} | ${moduleName[0] === '' ? 'Home' : moduleName[0]} Page`
          );
      });
  }
}

