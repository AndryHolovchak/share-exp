import { Rating } from '@/features/reviews/types';
import { MouseEventHandler, useEffect, useState } from 'react';
import { RatingView } from '@/features/reviews/components/rating-view/rating-view';
import { getHtmlElementRating } from '@/features/reviews/components/rating-view/utils';

interface Props {
  rating: Rating;
  onChange: (rating: Rating) => void;
}

export default function RatingInput({ rating, onChange }: Props) {
  const handleClick: MouseEventHandler<SVGElement> = (event) => {
    onChange(getHtmlElementRating(event.currentTarget)!);
  };

  return (
    <RatingView
      rating={rating}
      iconProps={{
        onClick: handleClick,
        className: 'cursor-pointer',
      }}
    />
  );
}
