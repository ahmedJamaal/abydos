import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule, NgbToast, NgbToastModule} from '@ng-bootstrap/ng-bootstrap';
import { LocationStrategy, HashLocationStrategy, registerLocaleData } from '@angular/common';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import en from '@angular/common/locales/en';
import ar from '@angular/common/locales/ar';
import { TranslateModule, TranslateLoader, TranslatePipe } from '@ngx-translate/core';
import { LoadingInterceptor } from './service/_interceptor/loading.interceptor';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NotificationService } from '@service/shared/notifcation.service';
import { LayoutsModule } from '@layouts/layouts.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorInterceptor } from '@service/_interceptor/error.interceptor';

registerLocaleData(en);
registerLocaleData(ar);

function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    // MqttModule.forRoot(MQTT_SERVICE_OPTIONS),
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    LayoutsModule,
    HttpClientModule,
    NgbToastModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [TranslateModule],
  providers: [
    TranslatePipe,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
    ,NgbToast
    , NotificationService
  ],
  bootstrap: [AppComponent],
  // providers: [],

})
export class AppModule { }
