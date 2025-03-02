import { Rating } from '@/features/reviews/types';

export interface Employer {
  _id: string;
  name: string;
  description: string;
  createdAt: string;
  totalReviews: number;
  averageRating: Rating;
}
