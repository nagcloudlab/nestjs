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


  products: any[] = [
    {
      id: 1,
      name: 'Laptop',
      price: 150000,
      discount: 10,
      currencyType: 'INR',
      description: 'This is a great product.',
      imageUrl: 'images/Laptop.png',
      isAvailable: true,
      makeDate: Date.now()
    },
    {
      id: 2,
      name: 'Mobile',
      price: 20000,
      discount: 5,
      currencyType: 'INR',
      description: 'This is another great product.',
      imageUrl: 'images/Mobile.png',
      isAvailable: true,
      makeDate: Date.now()
    },
  ];




}
