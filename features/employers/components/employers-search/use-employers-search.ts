import { useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent, useState, useTransition } from 'react';

interface Props {
  initialValue: string;
}

export function useEmployersSearch({ initialValue = '' }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [value, setValue] = useState(initialValue);
  const [isSearching, startTransition] = useTransition(); // Handles transition state

  const handleSearch = () => {
    startTransition(() => {
      const params = new URLSearchParams(searchParams.toString());
      params.set('page', '1');
      params.set('search', value);

      router.push(`?${params.toString()}`, { scroll: false });
    });
  };

  return {
    search: handleSearch,
    input: {
      value,
      disabled: isSearching,
      onChange: (event: ChangeEvent<HTMLInputElement>) =>
        setValue(event.target.value),
    },
  };
}
