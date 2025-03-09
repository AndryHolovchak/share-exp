import { Reviews } from '@/features/reviews/components/reviews';
import { ListPaginationParams } from '@/types/list';
import USER_API from '@/features/users/api';

interface Props {
  pagination: ListPaginationParams;
}

export async function UserReviews({ pagination }: Props) {
  const reviews = await USER_API.fetchReviews(pagination);

  if (!reviews) {
    return <div>404</div>;
  }
  console.log({ reviews });
  return <Reviews reviews={reviews} pagination={pagination} />;
}
