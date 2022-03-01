import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Review } from '../models/review';

@Component({
  selector: 'app-reviewlist',
  templateUrl: 'reviewlist.component.html',
  styleUrls: ['./reviewlist.component.css'],
})
export class ReviewlistComponent {
  name = 'Angular';
  reviewsToDisplay: Review[] = [];

  @Input() set reviews(value: Review[]) {
    this.reviewsToDisplay = value;
  }
}
