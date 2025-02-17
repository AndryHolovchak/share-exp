import { NextPageProps } from '@/types/next';
import EMPLOYERS_API from '@/features/employers/api';
import { PageHeader } from '@/components/laylout/page-header';
import { EmployerBaseInfo } from '@/features/employers/components/employer-base-info';
import { PageContent } from '@/components/laylout/page-content';
import { EmployerReviews } from '@/features/employers/containers/employer-reviews';
import { ListPaginationParams } from '@/types/list';
import { normalizeListPaginationParams } from '@/utils/normalize-list-pagination-params';
import AddReviewDialog from '@/features/reviews/components/add-review-dialog';

type Props = NextPageProps<{ employerId: string }, ListPaginationParams>;

export default async function ProductPage({ params, searchParams }: Props) {
  const { employerId } = await params;
  const pagination = await searchParams;
  const employer = await EMPLOYERS_API.fetchEmployerById(employerId);

  return (
    <div>
      <PageHeader
        withBackButton
        backButtonHref="../"
        leftSlot={<EmployerBaseInfo employer={employer} />}
      />
      <PageContent>
        <AddReviewDialog
          employerId={employerId}
          triggerClassName="w-full mb-8"
        />
        <EmployerReviews
          employerId={employerId}
          pagination={normalizeListPaginationParams(pagination)}
        />
      </PageContent>
    </div>
  );
}
