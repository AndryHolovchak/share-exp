'use client';

import ReviewForm from '@/features/reviews/components/review-form';
import { useRouter } from 'next/navigation';
import { ReviewFormValues } from '@/features/reviews/types';
import useErrorHandler from '@/error-handling/use-error-handler';
import EMPLOYERS_API from '@/features/employers/api';
import Modal, { ModalBaseProps } from '@/components/ui/modal';

interface Props extends ModalBaseProps {
  employerId: string;
  onClose: VoidFunction;
}

export default function AddReviewModal({ employerId, ...modal }: Props) {
  const router = useRouter();

  const createReview = useErrorHandler(async (review: ReviewFormValues) => {
    await EMPLOYERS_API.createReview(employerId, review);
    modal.onClose();
    router.refresh();
  });

  return (
    <Modal
      {...modal}
      title="Відгук"
      description="Будь ласка, опишіть ваш досвід"
      content={<ReviewForm onSubmit={createReview} />}
    />
  );
}
