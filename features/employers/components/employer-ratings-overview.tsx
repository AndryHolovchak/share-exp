import { ReviewRatings } from '@/features/reviews/types';
import calculateAverageRating from '@/features/reviews/utils/calculateAverageRating';
import { StarIcon } from 'lucide-react';
import ReviewRatingsWithCategories from '@/features/reviews/review-ratings-with-categories';
import { cn } from '@/lib/utils';

interface Props {
  ratings: ReviewRatings;
  className?: string;
}

export default function EmployerRatingsOverview({ ratings, className }: Props) {
  const averageRating = calculateAverageRating(Object.values(ratings));

  return (
    <div
      className={cn(
        'flex flex-col-reverse items-center justify-center gap-3 sm:flex-row sm:justify-between',
        className
      )}
    >
      <ReviewRatingsWithCategories ratings={ratings} />
      <div className="flex items-center gap-4">
        <span className="text-6xl font-bold">{averageRating}</span>
        <StarIcon className="size-12 fill-black" />
      </div>
    </div>
  );
}
