import { fetchAllEmployers } from '@/features/employers/api';
import Link from 'next/link';
import EmployerCard from '@/features/employers/components/employer-card';
import { ListParams } from '@/types/list';
import { List } from '@/components/ui/list';
import { Frown } from 'lucide-react';

export async function EmployersList(params: ListParams) {
  const employers = await fetchAllEmployers(params);

  return (
    <List
      count={employers.count}
      pagination={params}
      emptyStateProps={{
        title: (
          <>
            На жаль, я не знаю такого роботодавця <Frown />
          </>
        ),
      }}
    >
      {employers.rows.map((employer) => (
        <Link href={`/employers/${employer._id}`} key={employer._id}>
          <EmployerCard employer={employer} />
        </Link>
      ))}
    </List>
  );
}
