import { CurrencyPipe, DatePipe, NgClass, NgIf, UpperCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Review } from "../review/review";
import { Highlight } from '../highlight';
import { PriceDiscountPipe } from '../price-discount-pipe';
import { CartService } from '../cart-service';

@Component({
  selector: 'app-product',
  imports: [
    NgIf,
    NgClass,
    Highlight,
    CurrencyPipe,
    UpperCasePipe,
    DatePipe,
    PriceDiscountPipe,
    Review
  ],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {

  @Input("value") product: any; // input property
  cart: any[] = [];
  isItemInCart: boolean = false;

  constructor(private cartService: CartService) {
  }

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

  ngOnInit() {
    this.cartService.cart$.subscribe(cart => {
      this.cart = cart;
      this.isItemInCart = this.cart.some(item => item.id === this.product.id);
    });
  }

  // methods
  addToCart(event: PointerEvent, product: any) {
    this.cartService.addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1
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
