import { UserBase } from '@/features/users/types';
import { Employer } from '@/features/employers/types';

export type Rating = 0 | 1 | 2 | 3 | 4 | 5;

export interface Review {
  _id: string;
  content: string;
  rating: Rating;
  createdAt: string;
  author: UserBase;
  employer?: Employer;
}

export interface ReviewFormValues {
  rating: Rating;
  content: string;
}
