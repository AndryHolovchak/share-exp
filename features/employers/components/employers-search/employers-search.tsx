'use client';

import { SearchIcon } from 'lucide-react';
import { InputWithButton } from '@/components/ui/inputs/input-with-button';
import { useEmployersSearch } from '@/features/employers/components/employers-search/use-employers-search';
import { useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';
import { InputProps } from '@/components/ui/inputs/input';
import { CloseIcon } from 'next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon';
import { Button } from '@/components/ui/button';

interface Props {
  placeholder?: string;
  className?: string;
  containerClassName?: string;
}

export function EmployersSearch({
  className,
  containerClassName,
  placeholder = 'Роботодавець',
}: Props) {
  const searchParams = useSearchParams();

  const { search, input } = useEmployersSearch({
    initialValue: searchParams.get('search') || '',
  });

  const inputProps = {
    ...input,
    type: 'search',
    autoCorrect: 'off',
    placeholder,
    className: cn('font-medium placeholder:font-normal', className),
  } satisfies InputProps;

  return (
    <form action="" className={cn('group', containerClassName)}>
      <InputWithButton
        {...inputProps}
        startAdornment={<SearchIcon className="hidden sm:inline" />}
        button={{
          onClick: search,
          className: 'outline-1 outline-black group-focus-within:outline',
          children: (
            <>
              <SearchIcon className="inline sm:hidden" />
              <span className="hidden sm:inline">Шукати</span>
            </>
          ),
        }}
      />
    </form>
  );
}
