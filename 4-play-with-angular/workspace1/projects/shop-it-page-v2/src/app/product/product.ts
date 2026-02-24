import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Review } from "../review/review";

@Component({
  selector: 'app-product',
  imports: [
    NgClass,
    Review
  ],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {

  @Input("value") product: any; // input property
  @Output() buy: EventEmitter<any> = new EventEmitter(); // output property

  currentTab = 1; // state
  reviews: any[] = [
    {
      stars: 5,
      body: "Great product!",
      author: "John Doe"
    },
    {
      stars: 4,
      body: "Good value for money.",
      author: "Jane Smith"
    }
  ];

  // methods
  addToCart(event: PointerEvent, product: any) {
    //console.log('Event:', event);
    //console.log('Product:', product);
    this.buy.emit({
      id: product.id,
      name: product.name,
      price: product.price
    });
  }

  handleTabChange(event: any, tabIndex: number) {
    console.log('Tab changed:', event);
    this.currentTab = tabIndex;
  }
  isActiveTab(tabIndex: number): boolean {
    return this.currentTab === tabIndex;
  }

}
