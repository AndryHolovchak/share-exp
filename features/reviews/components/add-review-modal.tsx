'use client';

import { useRouter } from 'next/navigation';
import useErrorHandler from '@/error-handling/use-error-handler';
import EMPLOYERS_API from '@/features/employers/api';
import { ModalBaseProps } from '@/components/ui/modal';
import ReviewFormModal from '@/features/reviews/components/review-form-modal';
import { ReviewContent } from '@/features/reviews/types';

interface Props extends ModalBaseProps {
  employerId: string;
  onClose: VoidFunction;
}

export default function AddReviewModal({ employerId, ...modal }: Props) {
  const router = useRouter();

  const createReview = useErrorHandler(async (review: ReviewContent) => {
    await EMPLOYERS_API.createReview(employerId, review);
    modal.onClose();
    router.refresh();
  });

  return <ReviewFormModal {...modal} formProps={{ onSubmit: createReview }} />;
}
