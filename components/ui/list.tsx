import { PropsWithChildren } from 'react';
import { Pagination } from '@/components/ui/pagination';
import { ListPaginationParams } from '@/types/list';

interface Props extends PropsWithChildren {
  count: number;
  pagination: ListPaginationParams;
}

export function List({ children, count, pagination }: Props) {
  return (
    <div>
      <div className="flex flex-col gap-4">{children}</div>
      <Pagination count={count} {...pagination} />
    </div>
  );
}
