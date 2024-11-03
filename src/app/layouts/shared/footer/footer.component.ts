import { Component } from '@angular/core';
import { environment } from '@environments/environment';
import { MARBLE_LIST, GRANITE_LIST, STONES_LIST, PACKING_LIST } from '@model/Constant/productList';
import { LanguageServiceService } from '@service/shared/language-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  appLink=environment;
  marbelList:any[]=MARBLE_LIST;
graniteList:any[]=GRANITE_LIST;
stonesList:any[]=STONES_LIST;
packingList:any[]=PACKING_LIST;
  constructor(
    public LanguageService: LanguageServiceService
  ) {}
}
