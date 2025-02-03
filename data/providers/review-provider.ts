import { Review } from '@/features/reviews/types';
import DataProvider from '@/data/data-provider';

export const REVIEW_DATA: Record<Review['id'], Review> = {
  '1': {
    id: '1',
    rating: 1,
    date: '2024-02-15',
    review: 'Just a crap!',
    authorName: 'Volodymyr Zelensky',
  },
};

const reviewProvider = new DataProvider(REVIEW_DATA);

export default reviewProvider;
