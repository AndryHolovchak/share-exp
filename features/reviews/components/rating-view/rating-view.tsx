'use client';

import { Rating } from '@/features/reviews/types';
import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface Props {
  rating: Rating;
  iconProps?: HTMLAttributes<SVGElement>;
}

export function RatingView({ rating, iconProps }: Props) {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) =>
        i < rating ? (
          <StarIcon
            key={i}
            data-rating={`${i + 1}`}
            {...iconProps}
            className={cn('h-5 w-5 fill-black', iconProps?.className)}
          />
        ) : (
          <StarIcon
            key={i}
            data-rating={`${i + 1}`}
            {...iconProps}
            className={cn(
              'h-5 w-5 fill-muted stroke-muted-foreground',
              iconProps?.className
            )}
          />
        )
      )}
    </div>
  );
}

function StarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
