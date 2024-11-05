import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '@model/Constant/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
@Input() product!:any;
@Input() productType!:string;
imagePath!:string;
constructor(
  private router:Router,
){

}
ngOnInit() {
this.product ? this.imagePath = this.getImage() : null;
}

getImage() :string{
 return this.product.images !== '' ?
  'url("assets/images/products/'+ this.productType+'/samples/'+this.product.image+'")':
  'url("assets/images/products/default.jpg")';
  // return this.product.images !== '' ?
  // 'url("assets/images/products/'+ this.productType+'/'+this.product.images+'")':
  // 'url("assets/images/products/default.jpg")';
}
ProductNavgation(){
  // this.router.navigateByUrl('')
  this.router.navigate(['Product'], { queryParams: { productId: this.product.id ,productType:this.productType }});
}
}
