'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { MessageSquarePlus } from 'lucide-react';
import { DialogBody } from 'next/dist/client/components/react-dev-overlay/internal/components/Dialog';
import ReviewForm from '@/features/reviews/components/review-form';
import { useRouter } from 'next/navigation';
import { ReviewFormValues } from '@/features/reviews/types';
import useErrorHandler from '@/error-handling/use-error-handler';
import EMPLOYERS_API from '@/features/employers/api';
import useAuthOnly from '@/auth/hooks/use-auth-only';
import useDialog from '@/hooks/use-dialog';
import { ADD_REVIEW_AUTH_DIALOG_CONFIG } from '@/auth/providers/auth-dialog-provider/components/auth-dialog/configs';

interface Props {
  employerId: string;
  triggerClassName?: string;
}

export default function AddReviewDialog({
  employerId,
  triggerClassName,
}: Props) {
  const dialog = useDialog();
  const router = useRouter();

  const onOpen = useAuthOnly({
    fn: dialog.onOpen,
    authDialogConfig: ADD_REVIEW_AUTH_DIALOG_CONFIG,
  });

  const createReview = useErrorHandler(async (review: ReviewFormValues) => {
    await EMPLOYERS_API.createReview(employerId, review);
    dialog.onClose();
    router.refresh();
  });

  return (
    <Dialog open={dialog.open} onOpenChange={dialog.onClose}>
      <DialogTrigger asChild onClick={onOpen}>
        <Button className={triggerClassName}>
          <MessageSquarePlus /> Залишити Відгук
        </Button>
      </DialogTrigger>
      <DialogContent className="top-1/4">
        <DialogHeader>
          <DialogTitle>Відгук</DialogTitle>
          <DialogDescription>Будь ласка, опишіть ваш досвід</DialogDescription>
        </DialogHeader>
        <DialogBody>
          <ReviewForm onSubmit={createReview} />
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
}
