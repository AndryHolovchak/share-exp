export type Rating = 1 | 2 | 3 | 4 | 5;

export interface Review {
  id: string;
  content: string;
  rating: Rating;
  createdAt: string;
  authorName: string;
}
