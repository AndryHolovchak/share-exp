'use client';

import { Employer } from '@/features/employers/types';
import { EmployersSearch } from '@/features/employers/components/employers-search/employers-search';
import { useCallback, useEffect, useMemo, useState } from 'react';
import useTyping from '@/hooks/use-typing';
import shuffleArray from '@/utils/shuffle-array';

interface Props {
  employers: Pick<Employer, 'name'>[];
}

export default function FancyEmployersSearch({ employers }: Props) {
  const employerNames = useMemo(
    () => [...shuffleArray(employers.map(({ name }) => name)), 'Роботодавець'],
    [employers]
  );

  const [textToType, setTextToType] = useState(employerNames[0]);

  useEffect(() => {
    setTextToType(employerNames[0]);
  }, [employerNames]);

  const onTyped = useCallback(
    () =>
      setTextToType(
        (prev) => employerNames[employerNames.indexOf(textToType) + 1] || prev
      ),
    [employerNames, textToType]
  );

  const placeholder = useTyping({
    onTyped,
    text: textToType,
  });

  return <EmployersSearch placeholder={placeholder} />;
}
