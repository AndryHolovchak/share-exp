import employerProvider from '@/data/providers/employer-provider';
import EmployerCard from '@/features/employers/components/employer-card';
import { PageTitle } from '@/components/laylout/page-title';
import Link from 'next/link';
import { PageHeader } from '@/components/laylout/page-header';
import { EmployersSearch } from '@/features/employers/components/employers-search/employers-search';
import { PageContent } from '@/components/laylout/page-content';

export default async function Page() {
  const employers = await employerProvider.list();

  return (
    <div>
      <PageHeader
        leftSlot={<PageTitle>Роботодавці</PageTitle>}
        centralSlot={<EmployersSearch />}
      />
      <PageContent>
        <div className="flex flex-col items-center gap-4">
          {employers.map((employer) => (
            <Link href={`/employers/${employer.id}`} key={employer.id}>
              <EmployerCard employer={employer} className="w-[720px]" />
            </Link>
          ))}
        </div>
      </PageContent>
    </div>
  );
}
