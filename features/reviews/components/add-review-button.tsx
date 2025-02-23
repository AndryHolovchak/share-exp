'use client';

import useDialog from '@/hooks/use-dialog';
import useSignedInOnly from '@/auth/hooks/use-signed-in-only';
import { ADD_REVIEW_SIGN_IN_MODAL_CONFIG } from '@/auth/providers/required-sign-in-modal-provider/components/required-sign-in-modal/configs';
import { Button } from '@/components/ui/button';
import { MessageSquarePlus } from 'lucide-react';
import AddReviewModal from '@/features/reviews/components/add-review-modal';

interface Props {
  className?: string;
  employerId: string;
}

export default function AddReviewButton({ className, employerId }: Props) {
  const dialog = useDialog();

  const onOpen = useSignedInOnly({
    fn: dialog.onOpen,
    modalConfig: ADD_REVIEW_SIGN_IN_MODAL_CONFIG,
  });

  return (
    <>
      <Button onClick={onOpen} className={className}>
        <MessageSquarePlus /> Залишити Відгук
      </Button>
      <AddReviewModal employerId={employerId} {...dialog} />
    </>
  );
}
