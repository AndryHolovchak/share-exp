'use client';

import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { ListPaginationParams } from '@/types/list';

interface Props extends Required<ListPaginationParams> {
  count: number;
}

export function Pagination({ count, page, limit }: Props) {
  const router = useRouter();

  const from = Math.min(Math.max(1, (page - 1) * limit), count);
  const to = Math.min((page - 1) * limit + limit, count);

  const goToPage = (page: number) => {
    router.push(`?page=${page}`);
  };

  return (
    <div className="mt-6 flex items-center justify-end gap-2">
      <span className="text-muted-foreground">
        {from}-{to} з {count}
      </span>
      <div className="flex">
        <Button
          variant="ghost"
          disabled={page === 1}
          onClick={() => goToPage(page - 1)}
        >
          <ChevronLeft />
        </Button>
        <Button
          variant="ghost"
          disabled={to === count}
          onClick={() => goToPage(page + 1)}
        >
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
}
