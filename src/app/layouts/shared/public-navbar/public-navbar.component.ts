import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '@model/Constant/product';
import { GRANITE_LIST, MARBLE_LIST, PACKING_LIST, STONES_LIST } from '@model/Constant/productList';
import { LanguageServiceService } from '@service/shared/language-service.service';

@Component({
  selector: 'app-public-navbar',
  templateUrl: './public-navbar.component.html',
  styleUrls: ['./public-navbar.component.scss']
})
export class PublicNavbarComponent {
  currentLanguage!: string;
  url: string = 'assets/images/avatar/avatar.png';
marbelList:any[]=MARBLE_LIST;
graniteList:any[]=GRANITE_LIST;
stonesList:any[]=STONES_LIST;
packingList:any[]=PACKING_LIST;
  constructor(
    private router: Router,
    public LanguageService: LanguageServiceService
  ) {}
  ngOnInit(): void {
    this.currentLanguage = this.LanguageService.activeCurrentLanguage;


  let packages = this.marbelList.reduce((result, item) => {
    result[item.id] = item.name;
    return result;
}, {});
  console.log(packages);


  console.log(MARBLE_LIST); // 7
  console.log(GRANITE_LIST); // 10
  console.log(STONES_LIST); //5
  console.log(PACKING_LIST); // 4

  }

 convertArrayToJSON(array:any[]) {
    return array.reduce((result, item) => {
        result[item.id] = item.name;
        return result;
    }, {});
}

}
