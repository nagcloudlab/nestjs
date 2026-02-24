import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { Navbar } from './navbar/navbar';
import { CartBadge } from "./cart-badge/cart-badge";
import { CartTable } from "./cart-table/cart-table";

@Component({
  selector: 'app-root',
  imports: [
    ProductList,
    Navbar,
    CartBadge,
    CartTable
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = 'shop-it-page-v2';

  cart: Array<any> = [];

  isCartTableVisible = false

  toggleCartTable() {
    this.isCartTableVisible = !this.isCartTableVisible;
  }

  addToCart(product: any) {
    // if an item with the same id already exists in the cart, increase its quantity
    // cartLine = {name,price,quantity,totalPrice}
    const existingItem = this.cart.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1;
      existingItem.totalPrice = existingItem.quantity * existingItem.price;
    } else {
      // otherwise, add the new item to the cart with quantity 1
      // this.cart.push({ ...product, quantity: 1, totalPrice: product.price }); // mutable operation, we are modifying the existing cart array
      this.cart = [...this.cart, { ...product, quantity: 1, totalPrice: product.price }]; // immutable operation, we are creating a new cart array with the new item added
    }
  }

}
