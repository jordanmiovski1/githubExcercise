import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Review } from './models/review';
import { Filters } from './models/filters';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  reviewsToDisplay: Review[] = [];
  allreviews: Review[] = [];

  constructor(private readonly http: HttpClient) {}
  ngOnInit() {
    this.getReviews().subscribe((x) => (this.allreviews = x));
  }

  public getReviews(): Observable<Review[]> {
    return this.http.get<Review[]>('assets/reviews.json');
  }
  public onFiltersChanged(filter: Filters) {
    let reviewsToDisplay = this.allreviews.filter(
      (x) => x.rating >= filter.minRating
    );

    reviewsToDisplay = reviewsToDisplay.sort((x, y) => {
      if (filter.prioritizeByText) {
        if (this.doesReviewHasText(x) && !this.doesReviewHasText(y)) {
          return -1;
        }

        if (this.doesReviewHasText(y) && !this.doesReviewHasText(x)) {
          return 1;
        }
      }

      if (x.rating != y.rating) {
        return filter.orderHighestRatingFirst
          ? y.rating - x.rating
          : x.rating - y.rating;
      }

      return filter.orderByOldestDateFirst
        ? x.reviewCreatedOnTime - y.reviewCreatedOnTime
        : y.reviewCreatedOnTime - x.reviewCreatedOnTime;
    });
    this.reviewsToDisplay = reviewsToDisplay;
  }

  public doesReviewHasText(review: Review) {
    return review.reviewText != null && review.reviewText.trim() != '';
  }
}
