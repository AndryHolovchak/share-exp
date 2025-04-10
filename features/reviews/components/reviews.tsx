import { Review } from '@/features/reviews/types';
import { ListPaginationParams, ListResponse } from '@/types/list';
import { List } from '@/components/ui/list';
import { Annoyed } from 'lucide-react';
import getIllustrationPath from '@/utils/get-illustration-path';
import ReviewView from '@/features/reviews/components/review-view';

interface Props {
  reviews: ListResponse<Review>;
  pagination: ListPaginationParams;
}

export async function Reviews({ reviews, pagination }: Props) {
  return (
    <div className="relative gap-12 md:px-6">
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
