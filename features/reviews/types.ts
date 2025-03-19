import { UserBase } from '@/features/users/types';
import { Employer } from '@/features/employers/types';

export type Rating = 0 | 1 | 2 | 3 | 4 | 5;

export type ReviewVote = -1 | 1;

export interface ReviewContent {
  rating: Rating;
  // Editor state
  content?: string;
  anonymous: boolean;
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
