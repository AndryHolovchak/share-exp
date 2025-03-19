'use client';

import { Button } from '@/components/ui/button';
import useDialog from '@/hooks/use-dialog';
import EditReviewModal from '@/features/reviews/components/edit-review-modal';
import { Review, ReviewContent } from '@/features/reviews/types';

interface Props {
  review: Pick<Review, '_id'> & ReviewContent;
}

export default function ReviewActions({ review }: Props) {
  const { onOpen: openEditModal, ...editModal } = useDialog();

  return (
    <div>
      <Button size="sm" variant="ghost" onClick={openEditModal}>
        Редагувати
      </Button>
      <EditReviewModal {...editModal} review={review} />
    </div>
  );
}
