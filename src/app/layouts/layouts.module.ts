import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { FooterComponent } from './shared/footer/footer.component';

import { NotificationService } from '@service/shared/notifcation.service';
import {
  NgbCollapse,
  NgbDropdownItem,
  NgbDropdownMenu,
  NgbDropdownModule,
  NgbPopover,
  NgbProgressbarModule,
  NgbToast,
  NgbToastModule,
  NgbTooltipModule,
} from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { PublicNavbarComponent } from './shared/public-navbar/public-navbar.component';
import { AlertsComponent } from './shared/alerts/alerts.component';
import { NgScrollbarModule } from 'ngx-scrollbar';


import { ProductCardComponent } from './shared/product-card/product-card.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { DigitTransformPipe } from '@service/pipe/digit-transform.pipe';
import { NavbarComponent } from './shared/navbar/navbar.component';

@NgModule({
  declarations: [
    SpinnerComponent,
    FooterComponent,
    AlertsComponent,
    PublicLayoutComponent,
    PublicNavbarComponent,
    DigitTransformPipe,
    ProductCardComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    NgbToastModule,
    NgbTooltipModule,
    RouterModule,
    TranslateModule,
    NgbPopover,
    NgbCollapse,
    NgbDropdownModule,
    NgScrollbarModule,
    NgbProgressbarModule,
    NgbDropdownMenu,
    NgbDropdownItem,
    LazyLoadImageModule,

  ],
  exports: [
    SpinnerComponent,
    DigitTransformPipe,
    ProductCardComponent,
    AlertsComponent,
    NgbToastModule,
    NgbTooltipModule,
    NgbTooltipModule,
    PublicLayoutComponent,
  ],
})
export class LayoutsModule {}
