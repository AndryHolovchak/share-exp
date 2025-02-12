'use server';

import { Employer } from '@/features/employers/types';
import { Review } from '@/features/reviews/types';
import reviewProvider from '@/data/providers/review-provider';

type Params = {
  employerId: Employer['id'];
} & Pick<Review, 'content' | 'rating'>;

export default async function addReviewAction({
  employerId,
  rating,
  content,
}: Params) {
  const review = await reviewProvider.create({
    rating,
    content,
    authorName: 'Володимир Зеленський',
  });

  // await employerProvider.update(employerId, {
  //   reviews: [review],
  // });
}
