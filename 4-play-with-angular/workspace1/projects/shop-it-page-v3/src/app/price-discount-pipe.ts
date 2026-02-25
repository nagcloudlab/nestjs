import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceDiscount',
})
export class PriceDiscountPipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {
    if (args.length === 0) {
      return value;
    }
    const discountPercentage = args[0];
    return value - (value * discountPercentage / 100);
  }

}
