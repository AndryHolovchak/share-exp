import { ReviewRatingCategory, ReviewRatings } from '@/features/reviews/types';
import { RatingView } from '@/features/reviews/components/rating-view/rating-view';
import { REVIEW_RATING_CATEGORY_LABELS } from '@/features/reviews/constants';
import { RatingViewSize } from '@/features/reviews/components/rating-view/types';

interface Props {
  ratings: ReviewRatings;
  size?: RatingViewSize;
}

export default function ReviewRatingsWithCategories({ ratings, size }: Props) {
  return (
    <div className="flex w-fit flex-col gap-0.5">
      {Object.entries(ratings).map(([category, rating]) => (
        <RatingView
          key={category}
          rating={rating}
          size={size}
          titleClassName="text-slate-800 font-medium"
          title={
            REVIEW_RATING_CATEGORY_LABELS[category as ReviewRatingCategory]
          }
        />
      ))}
    </div>
  );
}
