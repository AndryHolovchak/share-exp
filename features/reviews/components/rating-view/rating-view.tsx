'use client';

import { Rating } from '@/features/reviews/types';
import { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface Props {
  title?: ReactNode;
  count?: number;
  rating: Rating;
  titleClassName?: string;
  iconProps?: HTMLAttributes<SVGElement>;
}

export function RatingView({
  title,
  count,
  rating,
  iconProps,
  titleClassName,
}: Props) {
  return (
    <div className="flex gap-2">
      <div className="flex">
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
        {count != null && (
          <sup className="left-0.5 top-1.5 text-muted-foreground">{count}</sup>
        )}
      </div>
      {title && (
        <span
          className={cn('text-sm font-medium text-slate-600', titleClassName)}
        >
          {title}
        </span>
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
