import { fetchAllEmployers } from '@/features/employers/api';
import Link from 'next/link';
import EmployerCard from '@/features/employers/components/employer-card';
import { ListParams } from '@/types/list';
import { normalizeListParams } from '@/utils/normalizeListParams';
import { Pagination } from '@/components/ui/pagination';

export async function EmployersList(params: ListParams) {
  const normalizedParams = normalizeListParams(params);
  const employers = await fetchAllEmployers(normalizedParams);

  return (
    <div>
      <div className="flex flex-col gap-4">
        {employers.rows.map((employer) => (
          <Link href={`/employers/${employer._id}`} key={employer._id}>
            <EmployerCard employer={employer} />
          </Link>
        ))}
      </div>
      <Pagination count={employers.count} {...normalizedParams} />
    </div>
  );
}
