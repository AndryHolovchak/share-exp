import employerProvider from '@/data/providers/employer-provider';
import EmployerCard from '@/features/employers/components/employer-card';
import { PageTitle } from '@/components/laylout/page-title';
import Link from 'next/link';

export default async function Page() {
  const employers = await employerProvider.list();
  return (
    <div>
      <PageTitle>Роботодавці</PageTitle>
      <div className="mx-auto flex max-w-[720px] flex-col items-center gap-4">
        {employers.map((employer) => (
          <Link href={`/employers/${employer.id}`} key={employer.id}>
            <EmployerCard employer={employer} />
          </Link>
        ))}
      </div>
    </div>
  );
}
