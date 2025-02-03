import { Review } from '@/features/review/types';

export interface Product {
  id: string;
  name: string;
  reviews: Review[];
}
