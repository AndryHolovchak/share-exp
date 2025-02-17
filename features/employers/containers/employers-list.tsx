import EMPLOYERS_API from '@/features/employers/api';
import Link from 'next/link';
import EmployerCard from '@/features/employers/components/employer-card';
import { ListParams } from '@/types/list';
import { List } from '@/components/ui/list';
import { Frown } from 'lucide-react';

export async function EmployersList(params: ListParams) {
  const employers = await EMPLOYERS_API.fetchAllEmployers(params);

  return (
    <List
      count={employers.count}
      pagination={params}
      emptyStateProps={{
        imageSrc: '/illustrations/searching.png',
        title: (
          <>
            На жаль, я не знаю такого роботодавця <Frown />
          </>
        ),
      }}
    >
      {employers.rows.map((employer) => (
        <Link href={`/employers/${employer._id}/reviews`} key={employer._id}>
          <EmployerCard employer={employer} />
        </Link>
      ))}
    </List>
  );
}
