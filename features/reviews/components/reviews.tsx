import { AvatarImage, AvatarFallback, Avatar } from '@/components/ui/avatar';
import ms from 'ms';
import { RatingView } from './rating-view/rating-view';
import { Review } from '@/features/reviews/types';
import { ListPaginationParams, ListResponse } from '@/types/list';
import { List } from '@/components/ui/list';
import { Annoyed } from 'lucide-react';
import getIllustrationPath from '@/utils/get-illustration-path';

interface Props {
  reviews: ListResponse<Review>;
  pagination: ListPaginationParams;
}

export async function Reviews({ reviews, pagination }: Props) {
  return (
    <div className="relative mx-auto max-w-[960px] gap-12 px-4 md:px-6">
      <List
        count={reviews.count}
        pagination={pagination}
        emptyStateProps={{
          title: (
            <>
              На жаль, я нічого не знаю про цього роботодавця <Annoyed />
            </>
          ),
          imageSrc: getIllustrationPath('searching-2'),
        }}
      >
        {reviews.rows.map((review) => (
          <ReviewView key={review._id} review={review} />
        ))}
      </List>
    </div>
  );
}

export function ReviewView({ review }: { review: Review }) {
  const date = new Date(review.createdAt);
  return (
    <div className="flex gap-4">
      <Avatar className="h-10 w-10 border">
        <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="grid gap-1">
        <div className="flex items-start gap-2">
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
            <RatingView rating={review.rating} />
          </div>
        </div>
        <div className="text-sm leading-loose text-gray-500 dark:text-gray-400">
          <p>{review.content}</p>
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
