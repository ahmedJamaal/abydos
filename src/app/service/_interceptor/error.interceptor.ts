import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ERROR } from '@model/Constant/ERROR';
import { NotificationService } from '../shared/notifcation.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  errorList: any[] = ERROR;
  constructor(
    private router: Router,
    private notificationService: NotificationService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err) => {
        

          const currentError = this.errorList.find(
            (error) => error.id === parseInt(err.status)
          );


            if (err.status === 0) {
              this.router.navigate([`/Error/502`]);
            } else if (err.status === 400) {
              this.notificationService.SuccessNotification(
                'Error in Load Data'
              );
            }else if (err.status === 401){
              // this.authenticationService.logout();
              // this.router.navigate([`/Login`]);
              this.router.navigate([`/Error/401`]);

            }

        
        const error = err.error.message || err.statusText;
        return throwError(() => error);
      })
    );
  }
}
