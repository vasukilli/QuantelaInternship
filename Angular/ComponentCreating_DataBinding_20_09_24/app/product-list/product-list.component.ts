import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  // name : string = "iPhone";
  // price : number = 999;
  // color : string = 'Red';
  // discountPrice : number = 6000;
  product = {
    name :"iPhone 15pro",
    price : 546000,
    color : "black",
    discount : 8.5,
    inStock : 0,
  };
  getDiscountPrice(){
    return this.product.price = (this.product.price * this.product.discount/100);
  }

}
