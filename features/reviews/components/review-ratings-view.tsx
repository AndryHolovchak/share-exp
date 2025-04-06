'use client';

import { ReviewRatingCategory, ReviewRatings } from '@/features/reviews/types';
import { RatingView } from '@/features/reviews/components/rating-view/rating-view';
import calculateAverageRating from '@/features/reviews/utils/calculateAverageRating';
import { cn } from '@/lib/utils';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useEffect, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { PopoverArrow } from '@radix-ui/react-popover';
import { REVIEW_RATING_CATEGORY_LABELS } from '@/features/reviews/constants';

interface Props {
  ratings: ReviewRatings;
  count?: number;
}

export default function ReviewRatingsView({ ratings, count }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const callback = () => {
      setOpen(false);
    };

    window.addEventListener('scroll', callback);

    return () => {
      window.removeEventListener('scroll', callback);
    };
  }, []);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        className="flex w-fit gap-1 rounded-md border bg-slate-100 p-1 px-2 transition-colors hover:bg-slate-200 focus:outline-none"
        onClick={(event) => {
          event.preventDefault();
          setOpen(!open);
        }}
      >
        <RatingView
          rating={calculateAverageRating(Object.values(ratings))}
          count={count}
        />
        <ChevronDown
          className={cn(
            'size-5 text-slate-500 transition-transform',
            open && 'rotate-180'
          )}
        />
      </PopoverTrigger>
      <PopoverContent
        align="start"
        sideOffset={1}
        className="flex w-fit flex-col gap-1 p-2"
        onClick={(event) => event.preventDefault()}
      >
        {Object.entries(ratings).map(([category, rating]) => (
          <RatingView
            key={category}
            rating={rating}
            title={
              REVIEW_RATING_CATEGORY_LABELS[category as ReviewRatingCategory]
            }
          />
        ))}
      </PopoverContent>
    </Popover>
  );
}
