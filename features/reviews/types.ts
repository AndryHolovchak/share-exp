export type ReviewRating = 1 | 2 | 3 | 4 | 5;

export interface Review {
  id: string;
  review: string;
  authorName: string;
  date: string;
  rating: ReviewRating;
}
