import { Component, TemplateRef, OnDestroy } from '@angular/core';
import { NotificationService } from '@service/shared/notifcation.service';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css'],
  host: {
    class: 'toast-container position-fixed top-0 end-0 p-3',
    style: 'z-index: 1200'
  }
})
export class AlertsComponent implements OnDestroy {
  constructor(public toastService: NotificationService) {
    // this.toas
  }

  isTemplate(toast: any) {
    return toast.textOrTpl instanceof TemplateRef;
  }
  ngOnInit(): void {}
  ngOnDestroy(): void {
    this.toastService.clear();
  }
}
