import { Review } from '@/features/reviews/types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import ms from 'ms';
import ReviewVoteControls from '@/features/reviews/components/review-vote-controls';
import { twMerge } from 'tailwind-merge';
import ReviewRatingsView from '@/features/reviews/components/review-ratings-view';
import ReviewActionMenu from '@/features/reviews/components/review-action-menu';
import ReviewTextContent from '@/features/reviews/components/review-text-content';

interface Props {
  review: Review;
  className?: string;
}
export default function ReviewView({ review, className }: Props) {
  const renderAuthorName = () => {
    if (review.anonymous) {
      return `Анонімно${review.isCurrentUserReview ? ' (Ви)' : ''}`;
    }

    return review.author?.name;
  };

  return (
    <div className={twMerge('flex flex-col gap-4 rounded-lg', className)}>
      <div className="flex flex-1 flex-col gap-2">
        <div className="flex items-center gap-2">
          <Avatar className="h-10 w-10 border">
            <AvatarImage alt="@shadcn" src={review.author?.picture} />
            <AvatarFallback>?</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">{renderAuthorName()}</span>
            <time className="text-xs text-gray-500" suppressHydrationWarning>
              {timeAgo(new Date(review.createdAt))}
            </time>
          </div>
          {review.isCurrentUserReview && (
            <ReviewActionMenu className="ml-auto self-start" />
          )}
        </div>
        <ReviewRatingsView ratings={review.ratings} />
      </div>
      <div className="flex flex-col gap-2">
        <ReviewTextContent value={review.pros || ''} type="pros" />
        <ReviewTextContent value={review.cons || ''} type="cons" />
      </div>
      <ReviewVoteControls review={review} className="ml-auto" />
    </div>
  );
}

/**
 * You probably want to wrap the parent element of this component with `suppressHydrationWarning`
 */
const timeAgo = (date: Date, suffix = true) => {
  if (Date.now() - date.getTime() < 1000) {
    return 'Just now';
  }
  return `${ms(Date.now() - date.getTime(), { long: true })}${
    suffix ? ' ago' : ''
  }`;
};
