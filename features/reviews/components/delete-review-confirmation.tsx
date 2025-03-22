import { ModalBaseProps } from '@/components/ui/modal';
import ConfirmationModal from '@/components/ui/confirmation-modal';
import { useRouter } from 'next/navigation';
import useErrorHandler from '@/error-handling/use-error-handler';
import EMPLOYERS_API from '@/features/employers/api';

interface Props extends ModalBaseProps {
  reviewId: string;
}

export default function DeleteReviewConfirmation({
  reviewId,
  ...modal
}: Props) {
  const router = useRouter();

  const deleteReview = useErrorHandler(async () => {
    await EMPLOYERS_API.deleteReview(reviewId);
    modal.onClose();
    router.refresh();
  });

  return (
    <ConfirmationModal
      {...modal}
      title="Видалити відгук?"
      description="Ти справді хочеш видалити цей відгук? Це не можна буде скасувати."
      confirmation={{
        text: 'Видалити',
        onClick: deleteReview,
      }}
    />
  );
}
