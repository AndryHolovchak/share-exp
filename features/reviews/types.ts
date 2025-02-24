import { UserBase } from '@/features/users/types';

export type Rating = 1 | 2 | 3 | 4 | 5;

export interface Review {
  _id: string;
  content: string;
  rating: Rating;
  createdAt: string;
  author: UserBase;
}

export interface ReviewFormValues {
  rating: Rating;
  content: string;
}
