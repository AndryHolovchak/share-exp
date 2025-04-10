import { UserBase } from '@/features/users/types';
import { Employer } from '@/features/employers/types';

export type ReviewVote = -1 | 1;

export type Rating = 0 | 1 | 2 | 3 | 4 | 5;

export type ReviewRatingCategory =
  | 'salary_and_benefits'
  | 'work_life_balance'
  | 'justice_and_equality'
  | 'career_growth'
  | 'management';

export type ReviewRatings = Record<ReviewRatingCategory, Rating>;

export interface ReviewContent {
  // Editor state
  pros?: string;
  // Editor state
  cons?: string;
  anonymous: boolean;
  ratings: ReviewRatings;
}

export interface Review extends ReviewContent {
  _id: string;
  createdAt: string;
  author?: UserBase;
  employer?: Employer;
  voteRating: number;
  isCurrentUserReview: boolean;
  currentUserVote: ReviewVote | null;
}
