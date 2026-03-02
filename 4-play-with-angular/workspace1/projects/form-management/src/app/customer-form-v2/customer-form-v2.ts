import { JsonPipe, NgFor, NgForOf, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-form-v2',
  imports: [
    NgIf,
    NgFor,
    JsonPipe,
    ReactiveFormsModule
  ],
  templateUrl: './customer-form-v2.html',
  styleUrl: './customer-form-v2.css',
})
export class CustomerFormV2 {

  customerFormGroup!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.customerFormGroup = this.fb.group({
      firstName: ['Nag', [Validators.required, Validators.minLength(3)]],
      lastName: ['Nag', [Validators.required, Validators.minLength(3)]],
      emailGroup: this.fb.group({
        email: ['nag@example.com', [Validators.required, Validators.email]],
        confirmEmail: ['nag@example.com', [Validators.required, Validators.email]]
      }, { validators: this.emailMatchValidator }),
      phone: [''],
      notificationPreference: ['email'],
      addressArray: this.fb.array([])
    });

    // Form Status and Value Changes
    // this.customerFormGroup.valueChanges.subscribe(value => {
    //   console.log('Form Value: ', value);
    // });
    // this.customerFormGroup.statusChanges.subscribe(status => {
    //   console.log('Form Status: ', status);
    // });

    // Form Control Status and Value Changes
    // this.customerFormGroup.get('firstName')?.valueChanges.subscribe(value => {
    //   console.log('First Name Value: ', value);
    // });
    // this.customerFormGroup.get('firstName')?.statusChanges.subscribe(status => {
    //   console.log('First Name Status: ', status);
    // });

    // Dynamic Validation
    this.customerFormGroup.get('notificationPreference')?.valueChanges.subscribe(value => {
      const phoneControl = this.customerFormGroup.get('phone');
      if (value === 'phone') {
        phoneControl?.setValidators([Validators.required, Validators.pattern(/^\d{10}$/)]);
      } else {
        phoneControl?.clearValidators();
      }
      phoneControl?.updateValueAndValidity();
    });
  }

  addAddress() {
    const addressGroup = this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    });
    (this.customerFormGroup.get('addressArray') as FormArray).push(addressGroup);
  }

  removeAddress(index: number) {
    (this.customerFormGroup.get('addressArray') as FormArray).removeAt(index);
  }

  get addressArray() {
    return (this.customerFormGroup.get('addressArray') as FormArray).controls;
  }

  loadCustomer() {
    const customer = {
      firstName: 'John',
      lastName: 'Doe'
    };
    this.customerFormGroup.setValue(customer);
  }

  handleSubmit() {
    if (this.customerFormGroup.invalid) {
      this.customerFormGroup.markAllAsTouched();
      return;
    }
    console.log('Form Submitted: ', this.customerFormGroup.value);
  }

  emailMatchValidator(group: FormGroup) {
    const email = group.get('email')?.value;
    const confirmEmail = group.get('confirmEmail')?.value;
    return email === confirmEmail ? null : { emailMismatch: true };
  }

}