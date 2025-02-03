import { Review } from '@/features/review/types';
import DataProvider from '@/data/data-provider';

export const REVIEW_DATA: Record<Review['id'], Review> = {
  '1': {
    id: '1',
    review:
      "Absolutely love the Mower3000! Installation was a breeze, thanks to the clear instructions and videos. It navigates my complex yard with ease, even the steep parts. Plus, it's so quiet, I barely notice it's working. Truly a game-changer for lawn care.",
    authorName: 'Jake P.',
    date: '2024-02-15',
    stars: 5,
  },
};

const reviewProvider = new DataProvider(REVIEW_DATA);

export default reviewProvider;
