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

  isCartTableVisible = false

  toggleCartTable() {
    this.isCartTableVisible = !this.isCartTableVisible;
  }

}
