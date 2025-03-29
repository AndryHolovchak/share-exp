'use client';

import { Employer } from '@/features/employers/types';
import EmployerCard from '@/features/employers/components/employer-card';
import useAutoScroll from '@/hooks/use-auto-scroll';

interface Props {
  employers: Employer[];
}

export default function EmployersCarousel({ employers }: Props) {
  const autoScroll = useAutoScroll();

  return (
    <div
      ref={autoScroll.ref}
      className="scrollbar-hide pointer-events-none flex justify-center gap-3 overflow-x-auto py-5"
    >
      {employers.map((employer) => (
        <EmployerCard
          key={employer._id}
          employer={employer}
          className="h-full w-[720px]"
        />
      ))}
    </div>
  );
}
