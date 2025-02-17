import EMPLOYERS_API from '@/features/employers/api';
import { Reviews } from '@/features/reviews/components/reviews';
import { ListPaginationParams } from '@/types/list';

interface Props {
  employerId: string;
  pagination: ListPaginationParams;
}

export async function EmployerReviews({ employerId, pagination }: Props) {
  const reviews = await EMPLOYERS_API.fetchEmployerReviews(
    employerId,
    pagination
  );

  return <Reviews reviews={reviews} pagination={pagination} />;
}
