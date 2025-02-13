import { PageTitle } from '@/components/laylout/page-title';
import { PageHeader } from '@/components/laylout/page-header';
import { EmployersSearch } from '@/features/employers/components/employers-search/employers-search';
import { PageContent } from '@/components/laylout/page-content';
import { EmployersList } from '@/features/employers/containers/employers-list';
import { NextPageProps } from '@/types/next';
import { ListParams } from '@/types/list';

type Props = NextPageProps<never, ListParams>;

export default async function Page(props: Props) {
  const listParams = await props.searchParams;

  return (
    <div>
      <PageHeader
        leftSlot={<PageTitle>Список Роботодавців</PageTitle>}
        centralSlot={<EmployersSearch />}
      />
      <PageContent>
        <EmployersList {...listParams} />
      </PageContent>
    </div>
  );
}
