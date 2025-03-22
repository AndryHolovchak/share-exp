'use client';

import { Button } from '@/components/ui/button';
import useDialog from '@/hooks/use-dialog';
import EditReviewModal from '@/features/reviews/components/edit-review-modal';
import { Review, ReviewContent } from '@/features/reviews/types';
import DeleteReviewConfirmation from '@/features/reviews/components/delete-review-confirmation';

interface Props {
  review: Pick<Review, '_id'> & ReviewContent;
}

export default function ReviewActions({ review }: Props) {
  const { onOpen: openEditModal, ...editModal } = useDialog();
  const { onOpen: openDeleteConfirmation, ...deleteConfirmation } = useDialog();

  return (
    <div>
      <Button size="sm" variant="ghost" onClick={openEditModal}>
        Редагувати
      </Button>
      <Button
        size="sm"
        variant="ghost"
        className="text-destructive"
        onClick={openDeleteConfirmation}
      >
        Видалити
      </Button>
      <EditReviewModal {...editModal} review={review} />
      <DeleteReviewConfirmation reviewId={review._id} {...deleteConfirmation} />
    </div>
  );
}
