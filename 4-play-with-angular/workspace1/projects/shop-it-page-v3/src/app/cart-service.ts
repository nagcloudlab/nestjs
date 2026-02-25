import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {

  private cart: any[] = [];
  cart$ = new BehaviorSubject<any[]>(this.cart);

  constructor() { }

  addToCart(cartLine: any) {
    this.cart.push(cartLine);
    this.cart$.next(this.cart); // Notify subscribers of the updated cart
  }

  deleteCartLine(cartLineId: number) {
    const index = this.cart.findIndex(item => item.id === cartLineId);
    if (index > -1) {
      this.cart.splice(index, 1);
      this.cart$.next(this.cart); // Notify subscribers of the updated cart
    }
  }

  updateCartLineQuantity(cartLineId: number, quantity: number) {
    const cartLine = this.cart.find(item => item.id === cartLineId);
    console.log(cartLine);
    if (cartLine) {
      cartLine.quantity += quantity;
      cartLine.totalPrice = cartLine.price * cartLine.quantity;
      if (cartLine.quantity <= 0) {
        this.deleteCartLine(cartLineId);
      }
      this.cart$.next(this.cart); // Notify subscribers of the updated cart
    }
  }

  clearCart() {
    this.cart = [];
    this.cart$.next(this.cart); // Notify subscribers of the updated cart
  }

  getCart() {
    return this.cart;
  }


}
