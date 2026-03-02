import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appFirstNameValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: FirstNameValidator,
      multi: true
    }
  ]
})
export class FirstNameValidator implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    console.log('Validating first name:', control.value);
    const value = control.value;
    if (!value) {
      return null; // Let required validator handle empty case
    }
    const nameRegex = /^[A-Z][a-zA-Z]{1,}$/;
    if (!nameRegex.test(value)) {
      return {
        firstNameInvalid: {
          message: 'First name must start with a capital letter and contain only letters (min 2 characters)'
        }
      };
    }
    return null;
  }

}
