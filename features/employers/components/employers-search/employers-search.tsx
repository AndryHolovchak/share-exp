'use client';

import { SearchIcon } from 'lucide-react';
import { InputWithButton } from '@/components/ui/inputs/input-with-button';
import { useEmployersSearch } from '@/features/employers/components/employers-search/use-employers-search';
import { useSearchParams } from 'next/navigation';

export function EmployersSearch() {
  const searchParams = useSearchParams();

  const { search, input } = useEmployersSearch({
    initialValue: searchParams.get('search') || '',
  });

  return (
    <InputWithButton
      {...input}
      placeholder="..."
      className="font-medium"
      containerClassName="w-[460px] h-12"
      startAdornment={<SearchIcon />}
      button={{ children: 'Пошук', onClick: search }}
    />
  );
}
