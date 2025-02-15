import Image from 'next/image';
import { ReactNode } from 'react';

export interface EmptyStateProps {
  imageSrc: string;
  title: ReactNode;
}

export function EmptyState({ title, imageSrc }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Image
        src={imageSrc}
        alt="empty"
        className="pointer-events-none select-none"
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
