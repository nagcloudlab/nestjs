// import { NgFor, NgIf } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    NgClass
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // data
  title = "Shop IT Page";
  products: any[] = [
    {
      name: 'Laptop',
      price: 150000,
      description: 'This is a great product.',
      imageUrl: 'images/Laptop.png',
      isAvailable: true
    },
    {
      name: 'Mobile',
      price: 20000,
      description: 'This is another great product.',
      imageUrl: 'images/Mobile.png',
      isAvailable: true
    },
  ];
  currentTab = 1; // state

  // methods
  addToCart(event: PointerEvent, product: any) {
    console.log('Event:', event);
    console.log('Product:', product);
  }

  handleTabChange(event: any, tabIndex: number) {
    console.log('Tab changed:', event);
    this.currentTab = tabIndex;
  }
  isActiveTab(tabIndex: number): boolean {
    return this.currentTab === tabIndex;
  }

}
