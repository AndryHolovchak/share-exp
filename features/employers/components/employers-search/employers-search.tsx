'use client';

import { SearchIcon } from 'lucide-react';
import { InputWithButton } from '@/components/ui/inputs/input-with-button';
import { useEmployersSearch } from '@/features/employers/components/employers-search/use-employers-search';
import { useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';

interface Props {
  placeholder?: string;
}

export function EmployersSearch({ placeholder = '...' }: Props) {
  const searchParams = useSearchParams();

  const { search, input } = useEmployersSearch({
    initialValue: searchParams.get('search') || '',
  });

  return (
    <form action="">
      <InputWithButton
        {...input}
        type="search"
        autoCorrect="off"
        placeholder={placeholder}
        className={cn('font-medium placeholder:font-normal')}
        startAdornment={<SearchIcon />}
        button={{
          children: 'Пошук',
          onClick: search,
        }}
      />
    </form>
  );
}
