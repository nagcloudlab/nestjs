import { Component, Input } from '@angular/core';
import { CartService } from '../cart-service';

@Component({
  selector: 'app-cart-badge',
  imports: [],
  templateUrl: './cart-badge.html',
  styleUrl: './cart-badge.css',
})
export class CartBadge {

  value: number = 0;

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    console.log('CartBadge ngOnInit');
    this.cartService.cart$.subscribe(cart => {
      this.value = cart.length;
    });
  }

}
