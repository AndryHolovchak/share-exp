import { ReviewRatingCategory, ReviewRatings } from '@/features/reviews/types';
import { RatingView } from '@/features/reviews/components/rating-view/rating-view';
import { REVIEW_RATING_CATEGORY_LABELS } from '@/features/reviews/constants';

interface Props {
  ratings: ReviewRatings;
}

export default function ReviewRatingsWithCategories({ ratings }: Props) {
  return (
    <div className="flex w-fit flex-col gap-1">
      {Object.entries(ratings).map(([category, rating]) => (
        <RatingView
          key={category}
          rating={rating}
          titleClassName="text-slate-800 font-medium"
          title={
            REVIEW_RATING_CATEGORY_LABELS[category as ReviewRatingCategory]
          }
        />
      ))}
    </div>
  );
}
