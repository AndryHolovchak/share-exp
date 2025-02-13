import { ListPaginationParams } from '@/types/list';

interface Props {
  params: ListPaginationParams;
  count: number;
}

export function PagePagination({ count, params }: Props) {
  const { page, limit } = params;

  return (
    <div>
      {page} {limit}
    </div>
  );
}
