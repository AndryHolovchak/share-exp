import { Review } from '@/features/reviews/types';

export interface Employer {
  id: string;
  name: string;
  categories: [string];
  description: string;
  reviews: Review[];
}
