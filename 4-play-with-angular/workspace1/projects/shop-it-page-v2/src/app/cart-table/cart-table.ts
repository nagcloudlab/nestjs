import { Component, Input, signal, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-cart-table',
  imports: [],
  templateUrl: './cart-table.html',
  styleUrl: './cart-table.css',
})
export class CartTable {

  @Input("value") cart: Array<any> = [];
  currentTime: any = signal(new Date().toLocaleTimeString());
  intervalId: any;

  constructor() {
    console.log("CartTable::constructor");
    // why we need?
    // to do any one time initialization logic
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("CartTable::ngOnChanges");
    console.log(changes);
    // when the input property value changes, this method will be called
    // to do any logic based on the changed input value
  }

  ngOnInit() {
    console.log("CartTable::ngOnInit");
    // when the component is initialized, this method will be called
    // to do any initialization logic that requires the component to be fully initialized
    // - backend api call to fetch data from NestJS server and populate the cart table
    this.intervalId = setInterval(() => {
      this.currentTime.set(new Date().toLocaleTimeString());
      console.log("CartTable::setInterval::currentTime", this.currentTime);
    }, 1000);
  }

  ngOnDestroy() {
    console.log("CartTable::ngOnDestroy");
    // when the component is destroyed, this method will be called
    // to do any cleanup logic that requires the component to be fully destroyed
    // - cancel any pending backend api call to fetch data from NestJS server
    // - clear any setInterval or setTimeout
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

}
