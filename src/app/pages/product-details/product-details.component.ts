import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '@environments/environment';
import { GRANITE_LIST, MARBLE_LIST, STONES_LIST } from '@model/Constant/productList';
import { Product } from '@model/Constant/product';
import { LoaderService } from '@service/shared/loader.service';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  isLoading:boolean= true;
productId!:string;
productType!:string;
product!:Product | any;



mediaUrl = 'assets/images/products/';

_albums: any[] = [];
  constructor(
private route:ActivatedRoute,
public _lightbox: Lightbox,
private spinner:LoaderService
  ){
    this.route.queryParams
    .subscribe((params: any) => {
      this.spinner.setLoading(true);
      this.productId = params.productId;
      this.productType = params.productType;
      this.getProduct(this.productId , this.productType);
      this.AddImageAlbum(this.product);
      this.isLoading=false;
    });
  }

getProduct(id:string , productType:string){
console.log(id,productType);
console.log(this.product);

if(productType === 'Marble'){
  this.product = MARBLE_LIST.find((element:Product) => element.id === this.productId)!
}else if(productType === 'Granite'){
  this.product = GRANITE_LIST.find((element:Product) => element.id === this.productId)!
}else{
  this.product = STONES_LIST.find((element:Product) => element.id === this.productId)!

}
console.log(this.product);
}
open(index: number): void {

  this._lightbox.open(this._albums, index);

}

close(): void {
  // close lightbox programmatically
  this._lightbox.close();
}

AddImageAlbum(product:Product){
  this._albums = []
  product.image ?
    this._albums.push({
      src: `${this.mediaUrl}${this.productType}/${this.product.image}`,
      caption: this.product.name,
      id: 0,
      isActive: false
    })
  : null
  product.imagesUrl.length !== 0 ?
  product.imagesUrl.map((image: any, index: number) => {
    this._albums.push({
      src: `${this.mediaUrl}${this.productType}/${image}`,
      caption: product.name + index+1,
      id: index,
      isActive: false
    });

  })
  : null
  this.spinner.setLoading(false);
}
}
