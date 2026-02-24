import { Component, Input } from '@angular/core';

type ProductReview = {
  author: string;
  stars: number;
  body: string;
};

@Component({
  selector: 'app-review',
  imports: [],
  templateUrl: './review.html',
  styleUrl: './review.css',
})
export class Review {

  @Input('value') review!: ProductReview;

  get authorInitial(): string {
    return (this.review?.author?.trim()?.charAt(0) || '?').toUpperCase();
  }

}
