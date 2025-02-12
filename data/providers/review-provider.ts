import { Review } from '@/features/reviews/types';
import DataProvider from '@/data/data-provider';

export const REVIEW_DATA: Record<Review['id'], Review> = {
  '1': {
    id: '1',
    rating: 1,
    createdAt: '2024-02-15',
    content: 'Чорти!',
    authorName: 'Володимир Зеленський',
  },
};

export const REVIEW_TAG = 'review';
const reviewProvider = new DataProvider<Review>(REVIEW_TAG, 'reviews');

export default reviewProvider;
