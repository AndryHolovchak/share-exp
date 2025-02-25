import { PageHeader } from '@/components/laylout/page-header';
import { PageTitle } from '@/components/laylout/page-title';
import { PageContent } from '@/components/laylout/page-content';
import { NextPageProps } from '@/types/next';
import { ListParams } from '@/types/list';
import { UserReviews } from '@/features/users/containers/user-reviews';
import { normalizeListPaginationParams } from '@/utils/normalize-list-pagination-params';
import { ROUTES } from '@/constants/routes';

type Props = NextPageProps<never, ListParams>;

export default async function Page(props: Props) {
  const listParams = await props.searchParams;

  return (
    <div>
      <PageHeader
        withBackButton
        backButtonHref={ROUTES.EMPLOYERS()}
        leftSlot={<PageTitle>Мої відгуки</PageTitle>}
      />
      <PageContent>
        <UserReviews pagination={normalizeListPaginationParams(listParams)} />
      </PageContent>
    </div>
  );
}
