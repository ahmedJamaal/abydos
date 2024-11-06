import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ErrorPagesComponent } from './error-pages/error-pages.component';
import { TranslateModule } from '@ngx-translate/core';
import { LayoutsModule } from '@layouts/layouts.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbAccordionModule, NgbCarouselModule, NgbNavModule, NgbPagination, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { LAZYLOAD_IMAGE_HOOKS, LazyLoadImageModule, ScrollHooks } from 'ng-lazyload-image';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './home/about/about.component';
import { ContactSectionComponent } from './home/contact-section/contact-section.component';
import { CoverComponent } from './home/cover/cover.component';
import { HomeComponent } from './home/home.component';
import { GraniteComponent } from './shared/product-list/granite/granite.component';
import { MarbelComponent } from './shared/product-list/marbel/marbel.component';
import { ProjectsComponent } from './home/projects/projects.component';
import { CountUpModule } from 'ngx-countup';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductDetailsComponent } from './shared/product-details/product-details.component';

import { LightboxModule } from 'ngx-lightbox';
import { ServicesComponent } from './home/services/services.component';
import { StonesComponent } from './shared/product-list/stones/stones.component';
import { ContactUsFormComponent } from './contact-us/contact-us-form/contact-us-form.component';
import { TeamsComponent } from './contact-us/teams/teams.component';
import { CoverContactComponent } from './shared/cover-contact/cover-contact.component';
import { PackingComponent } from './packing/packing.component';
import { ProductListComponent } from './shared/product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { FeaturesComponent } from './home/features/features.component';


@NgModule({
  declarations: [
    ErrorPagesComponent,

    HomeComponent,
    ContactUsComponent,

    CoverComponent,
    ServicesComponent,
    AboutComponent,    ProjectsComponent,
    TeamsComponent,
    ContactSectionComponent,
    ContactUsFormComponent,
    MarbelComponent,
    GraniteComponent,
    ProductDetailsComponent,
    ProductComponent,
    StonesComponent,
    CoverContactComponent,
    PackingComponent,
    ProductListComponent,
    FeaturesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbPagination,
    NgbTooltipModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    LayoutsModule,
    LazyLoadImageModule,
    TranslateModule,
    CountUpModule,
    LightboxModule,
    NgbCarouselModule,
    CarouselModule,
    NgbAccordionModule,
    NgbNavModule,



  ],
  providers: [{ provide: LAZYLOAD_IMAGE_HOOKS, useClass: ScrollHooks },
  ]
})
export class PagesModule { }
