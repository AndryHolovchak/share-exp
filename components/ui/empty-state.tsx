import Image from 'next/image';
import { ReactNode } from 'react';

export interface EmptyStateProps {
  title: ReactNode;
}

export function EmptyState({ title }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Image
        src="/illustrations/searching.png"
        alt="empty"
        width={400}
        height={400}
      />
      <div className="flex flex-col items-center">
        <span className="inline-flex items-center gap-2 text-xl font-medium text-muted-foreground">
          {title}
        </span>
      </div>
    </div>
  );
}
