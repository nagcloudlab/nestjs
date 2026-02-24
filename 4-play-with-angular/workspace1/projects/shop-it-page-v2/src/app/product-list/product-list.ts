import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../product/product';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [
    Product,
  ],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {

  @Output() buy: EventEmitter<any> = new EventEmitter(); // output property

  products: any[] = [
    {
      id: 1,
      name: 'Laptop',
      price: 150000,
      description: 'This is a great product.',
      imageUrl: 'images/Laptop.png',
      isAvailable: true
    },
    {
      id: 2,
      name: 'Mobile',
      price: 20000,
      description: 'This is another great product.',
      imageUrl: 'images/Mobile.png',
      isAvailable: true
    },
  ];

  addToCart(product: any) {
    this.buy.emit(product);
  }



}
