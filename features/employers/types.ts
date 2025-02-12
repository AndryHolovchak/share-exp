import { Review, Rating } from '@/features/reviews/types';

export interface Employer {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  totalViews: number;
  totalReviews: number;
  averageRating: Rating;
}
