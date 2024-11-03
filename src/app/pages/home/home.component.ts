import { Component } from '@angular/core';
import { LoaderService } from '@service/shared/loader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(
    private spinner:LoaderService
  ){

    }
  ngOnInit(): void {
    this.spinner.routingLoading()
  }

}
