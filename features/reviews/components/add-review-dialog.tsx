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
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ReviewFormValues } from '@/features/reviews/types';
import useErrorHandler from '@/error-handling/use-error-handler';
import EMPLOYERS_API from '@/features/employers/api';

interface Props {
  employerId: string;
  triggerClassName?: string;
}

export default function AddReviewDialog({
  employerId,
  triggerClassName,
}: Props) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const createReview = useErrorHandler(async (review: ReviewFormValues) => {
    await EMPLOYERS_API.createReview(employerId, review);
    setOpen(false);
    router.refresh();
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild onClick={() => setOpen(true)}>
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
