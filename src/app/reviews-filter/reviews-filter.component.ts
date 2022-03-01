import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Filters } from '../models/filters';

@Component({
  selector: 'app-reviews-filter',
  templateUrl: './reviews-filter.component.html',
  styleUrls: ['./reviews-filter.component.css'],
})
export class ReviewsFilterComponent implements OnInit {
  @Output() onFiltersChanged = new EventEmitter<Filters>();
  constructor() {}

  form = new FormGroup({
    orderByOldestDateFirst: new FormControl(true),
    orderHighestRatingFirst: new FormControl(true),
    minRating: new FormControl(1),
    prioritizeByText: new FormControl(true),
  });

  ngOnInit(): void {}

  onClicked() {
    const filters: Filters = this.form.value;
    this.onFiltersChanged.emit(filters);
  }
}
