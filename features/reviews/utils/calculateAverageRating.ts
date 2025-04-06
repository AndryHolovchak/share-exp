import { Rating } from '@/features/reviews/types';

const calculateAverageRating = (ratings: Rating[]) => {
  const totalRatings = ratings.length;
  const sum = ratings.reduce((acc, rating) => acc + rating, 0 as number);
  return totalRatings === 0 ? 0 : (Math.round(sum / totalRatings) as Rating);
};

export default calculateAverageRating;
