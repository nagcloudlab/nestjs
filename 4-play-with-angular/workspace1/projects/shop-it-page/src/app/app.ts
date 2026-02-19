// import { NgFor, NgIf } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    // NgIf,
    // NgFor
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // data
  title = "Shop IT Page";
  products: any[] = [
    {
      name: 'Product 1',
      price: 100,
      description: 'This is a great product.',
      imageUrl: 'images/Laptop.jpg',
      isAvailable: true
    },
    {
      name: 'Product 2',
      price: 200,
      description: 'This is another great product.',
      imageUrl: 'images/Smartphone.jpg',
      isAvailable: true
    },
  ];

  // methods
  addToCart(event: PointerEvent, product: any) {
    console.log('Event:', event);
    console.log('Product:', product);
  }

}
