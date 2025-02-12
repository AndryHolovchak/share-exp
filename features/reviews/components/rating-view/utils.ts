import { Rating } from '@/features/reviews/types';

export const getHtmlElementRating = (element: Element): Rating | null =>
  element.getAttribute('data-rating') as Rating | null;
