'use client';

import { SearchIcon } from 'lucide-react';
import { InputWithButton } from '@/components/ui/inputs/input-with-button';
import { useEmployersSearch } from '@/features/employers/components/employers-search/use-employers-search';
import { useSearchParams } from 'next/navigation';
import { SEARCH_PARAM } from '@/constants/search-params';

export function EmployersSearch() {
  const searchParams = useSearchParams();

  const { search, input } = useEmployersSearch({
    initialValue: searchParams.get(SEARCH_PARAM) || '',
  });

  return (
    <InputWithButton
      {...input}
      className="font-medium"
      containerClassName="w-[460px] h-12"
      startAdornment={<SearchIcon />}
      button={{ children: 'Пошук', onClick: search }}
    />
  );
}
