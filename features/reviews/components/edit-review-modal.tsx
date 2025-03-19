'use client';

import { useRouter } from 'next/navigation';
import { Review, ReviewContent } from '@/features/reviews/types';
import useErrorHandler from '@/error-handling/use-error-handler';
import { ModalBaseProps } from '@/components/ui/modal';
import ReviewFormModal from '@/features/reviews/components/review-form-modal';
import EMPLOYERS_API from '@/features/employers/api';

interface Props extends ModalBaseProps {
  onClose: VoidFunction;
  review: Pick<Review, '_id'> & ReviewContent;
}

export default function EditReviewModal({ review, ...modal }: Props) {
  const router = useRouter();
  const { _id, ...reviewContent } = review;

  const editReview = useErrorHandler(async (review: ReviewContent) => {
    await EMPLOYERS_API.editReview(_id, review);
    modal.onClose();
    router.refresh();
  });

  return (
    <ReviewFormModal
      {...modal}
      formProps={{ onSubmit: editReview, defaultValues: reviewContent }}
    />
  );
}
