import { PageTitle } from '@/components/laylout/page-title';
import { PageHeader } from '@/components/laylout/page-header';
import { EmployersSearch } from '@/features/employers/components/employers-search/employers-search';
import { PageContent } from '@/components/laylout/page-content';
import { EmployersList } from '@/app/employers/_containers/employers-list';
import { NextPageProps } from '@/types/next';
import { SEARCH_PARAM } from '@/constants/search-params';

type Props = NextPageProps<never, { [SEARCH_PARAM]?: string }>;

export default async function Page(props: Props) {
  const searchParams = await props.searchParams;

  return (
    <div>
      <PageHeader
        leftSlot={<PageTitle>Роботодавці</PageTitle>}
        centralSlot={<EmployersSearch />}
      />
      <PageContent>
        <EmployersList search={searchParams?.search} />
      </PageContent>
    </div>
  );
}
