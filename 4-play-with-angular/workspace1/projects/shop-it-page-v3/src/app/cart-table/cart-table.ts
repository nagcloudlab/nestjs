import { Component, Input, signal, SimpleChange, SimpleChanges } from '@angular/core';
import { Highlight } from '../highlight';
import { CartService } from '../cart-service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart-table',
  imports: [
    Highlight,
    CurrencyPipe
  ],
  templateUrl: './cart-table.html',
  styleUrl: './cart-table.css',
})
export class CartTable {

  cart: Array<any> = [];
  currentTime: any = signal(new Date().toLocaleTimeString());
  intervalId: any;

  constructor(private cartService: CartService) {
    console.log("CartTable::constructor");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("CartTable::ngOnChanges");
    console.log(changes);
  }

  ngOnInit() {
    console.log("CartTable::ngOnInit");
    this.cartService.cart$.subscribe(cart => {
      this.cart = cart;
    });
  }

  ngOnDestroy() {
    console.log("CartTable::ngOnDestroy");
  }

  deleteCartLine(cartLineId: number) {
    this.cartService.deleteCartLine(cartLineId);
  }

  updateQuantity(cartLineId: number, quantity: number) {
    this.cartService.updateCartLineQuantity(cartLineId, quantity);
  }

}
