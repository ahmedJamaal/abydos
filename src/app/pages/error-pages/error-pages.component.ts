import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ERROR } from '@model/Constant/ERROR';
import { NotificationService } from '@service/shared/notifcation.service';

@Component({
  selector: 'app-error-pages',
  templateUrl: './error-pages.component.html',
  styleUrls: ['./error-pages.component.scss']
})
export class ErrorPagesComponent {
  errorList:any[]=ERROR;
  currentError!:any;
  constructor(
    private notificationService:NotificationService,
    private route: ActivatedRoute
  ){

  }
  ngOnInit(): void {
    const errorId:string = this.route.snapshot.paramMap.get('errorId')!;

    this.currentError= this.errorList.find(error => error.id === parseInt(errorId));
  }
}
