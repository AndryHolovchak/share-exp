import { ReactNode } from 'react';
import { Pagination } from '@/components/ui/pagination';
import { ListPaginationParams } from '@/types/list';
import { EmptyState, EmptyStateProps } from '@/components/ui/empty-state';

interface Props {
  count: number;
  pagination: ListPaginationParams;
  children?: ReactNode[];
  emptyStateProps: EmptyStateProps;
}

export function List({ children, count, pagination, emptyStateProps }: Props) {
  const isEmpty = !children?.length;

  return (
    <div>
      <div className="!empty:[&>#empty-state]:block flex flex-col gap-4">
        {children}
        {isEmpty && <EmptyState {...emptyStateProps} />}
      </div>
      {count > pagination.limit && <Pagination count={count} {...pagination} />}
    </div>
  );
}
