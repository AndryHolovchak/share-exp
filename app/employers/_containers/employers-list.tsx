import { fetchAllEmployers } from '@/features/employers/api';
import Link from 'next/link';
import EmployerCard from '@/features/employers/components/employer-card';

interface Props {
  search?: string;
}

export async function EmployersList({ search }: Props) {
  const employers = await fetchAllEmployers(search ?? null);

  return (
    <div className="flex flex-col items-center gap-4">
      {employers.map((employer) => (
        <Link href={`/employers/${employer._id}`} key={employer._id}>
          <EmployerCard employer={employer} className="w-[720px]" />
        </Link>
      ))}
    </div>
  );
}
