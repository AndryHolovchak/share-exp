import { Review } from '@/features/reviews/types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { RatingView } from '@/features/reviews/components/rating-view/rating-view';
import ms from 'ms';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';
import ReviewVoteControls from '@/features/reviews/components/review-vote-controls';
import EditorValue from '@/components/ui/lexical/components/editor-value';

interface Props {
  review: Review;
}
export default function ReviewView({ review }: Props) {
  const renderAuthorName = () => {
    if (review.anonymous) {
      return `Анонімно${review.isCurrentUserReview ? ' (Ви)' : ''}`;
    }

    return review.author?.name;
  };

  return (
    <div className="flex gap-4">
      <Avatar className="h-10 w-10 border">
        <AvatarImage alt="@shadcn" src={review.author?.picture} />
        <AvatarFallback>?</AvatarFallback>
      </Avatar>
      <div className="grid gap-1">
        <div className="flex items-start gap-2">
          <div className="grid gap-0.5 text-sm">
            <h3 className="font-semibold">{renderAuthorName()}</h3>
            <time
              className="text-sm text-gray-500 dark:text-gray-400"
              suppressHydrationWarning
            >
              {timeAgo(new Date(review.createdAt))}
            </time>
          </div>
          <div className="ml-auto flex items-center gap-0.5">
            <RatingView rating={review.rating} />
          </div>
          {review.employer && (
            <>
              <span>|</span>
              <Link
                href={ROUTES.EMPLOYER_REVIEW(review.employer._id)}
                className="font-medium underline"
              >
                {review.employer.name}
              </Link>
            </>
          )}
          <ReviewVoteControls className="ml-4" review={review} />
        </div>
        <div className="text-sm leading-loose text-primary dark:text-gray-400">
          <EditorValue value={review.content} />
        </div>
      </div>
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
