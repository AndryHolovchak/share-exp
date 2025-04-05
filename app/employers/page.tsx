import { PageTitle } from '@/components/laylout/page-title';
import { PageHeader } from '@/components/laylout/page-header';
import { EmployersSearch } from '@/features/employers/components/employers-search/employers-search';
import { PageContent } from '@/components/laylout/page-content';
import { EmployersList } from '@/features/employers/containers/employers-list';
import { NextPageProps } from '@/types/next';
import { ListParams } from '@/types/list';
import { normalizeListParams } from '@/utils/normalize-list-params';

type Props = NextPageProps<never, ListParams>;

export default async function Page(props: Props) {
  const listParams = await props.searchParams;
  return (
    <div>
      <PageHeader
        centralSlot={
          <EmployersSearch containerClassName="w-full max-w-[520px]" />
        }
      />
      <PageContent>
        <EmployersList {...normalizeListParams(listParams)} />
      </PageContent>
    </div>
  );
}
