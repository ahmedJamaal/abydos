import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  productType!:string;
  constructor(
    private route:ActivatedRoute,
      ){
  this.route.queryParams
  .subscribe((params: any) => {
    this.productType = params.productType;


  });
}
}
