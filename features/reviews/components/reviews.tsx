import { AvatarImage, AvatarFallback, Avatar } from '@/components/ui/avatar';
import ms from 'ms';
import { FiveStarRating } from './five-star-rating';
import { AIReviewSummary } from './ai-review-summary';
import { Employer } from '@/features/employers/types';
import { Review } from '@/features/reviews/types';

export async function Reviews({ product }: { product: Employer }) {
  return (
    <div className="mx-auto grid max-w-2xl gap-12 px-4 md:px-6">
      <AIReviewSummary product={product} />
      {product.reviews.map((review) => (
        <div key={review.review}>
          <ReviewView key={review.review} review={review} />
        </div>
      ))}
    </div>
  );
}

export function ReviewView({ review }: { review: Review }) {
  const date = new Date(review.date);
  return (
    <div className="flex gap-4">
      <Avatar className="h-10 w-10 border">
        <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="grid gap-4">
        <div className="flex items-start gap-4">
          <div className="grid gap-0.5 text-sm">
            <h3 className="font-semibold">{review.authorName}</h3>
            <time
              className="text-sm text-gray-500 dark:text-gray-400"
              suppressHydrationWarning
            >
              {timeAgo(date)}
            </time>
          </div>
          <div className="ml-auto flex items-center gap-0.5">
            <FiveStarRating rating={review.rating} />
          </div>
        </div>
        <div className="text-sm leading-loose text-gray-500 dark:text-gray-400">
          <p>{review.review}</p>
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
