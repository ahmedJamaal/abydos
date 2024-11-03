import { Component } from '@angular/core';
import { LoaderService } from '@service/shared/loader.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  constructor(
    private spinner:LoaderService
  ){

    }
  ngOnInit(): void {
    this.spinner.routingLoading()
  }
}
