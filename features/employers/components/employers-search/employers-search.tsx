'use client';

import { SearchIcon } from 'lucide-react';
import { InputWithButton } from '@/components/ui/inputs/input-with-button';
import { useEmployersSearch } from '@/features/employers/components/employers-search/use-employers-search';

export function EmployersSearch() {
  const { search, input } = useEmployersSearch();

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
