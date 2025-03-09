import { ReviewVote } from '@/features/reviews/types';
import { apiAction } from '@/network/api-fetch';

const REVIEWS_API = {
  vote: (reviewId: string, vote: ReviewVote | null) =>
    apiAction(`/review-votes/${reviewId}`, { body: { vote }, method: 'PUT' }),
};

export default REVIEWS_API;
