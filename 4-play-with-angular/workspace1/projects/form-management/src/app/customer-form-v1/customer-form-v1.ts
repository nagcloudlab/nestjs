import { JsonPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FirstNameValidator } from '../first-name-validator';

@Component({
  selector: 'app-customer-form-v1',
  imports: [
    FormsModule,
    JsonPipe,
    NgIf,
    FirstNameValidator
  ],
  templateUrl: './customer-form-v1.html',
  styleUrl: './customer-form-v1.css',
})
export class CustomerFormV1 {

  customerModel = {
    firstName: '',
    lastName: ''
  };

  handleSubmit(customerFormGroup: NgForm) {
    if (customerFormGroup.invalid) {
      return;
    }
    console.log(this.customerModel);
    console.log(customerFormGroup.value);
  }

  loadCustomer() {
    const customerData = {
      firstName: 'John',
      lastName: 'Doe'
    };
    this.customerModel = customerData;
  }

}
