import Image from 'next/image';
import { ReactNode } from 'react';

export interface EmptyStateProps {
  imageSrc: string;
  title: ReactNode;
  description?: ReactNode;
}

export function EmptyState({ title, description, imageSrc }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Image
        src={imageSrc}
        alt="empty"
        className="pointer-events-none select-none"
        width={400}
        height={400}
      />
      <div className="flex flex-col items-center gap-2">
        <span className="inline-flex items-center gap-2 text-xl font-medium text-muted-foreground">
          {title}
        </span>
        <div>{description}</div>
      </div>
    </div>
  );
}
