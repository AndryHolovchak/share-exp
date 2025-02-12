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
import { Employer } from '@/features/employers/types';
import { revalidatePath } from 'next/cache';
import { makListTag } from '@/data/data-provider';
import { EMPLOYER_TAG } from '@/data/providers/employer-provider';

interface Props {
  employerId: string;
}

export default function AddReviewDialog({ employerId }: Props) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild onClick={() => setOpen(true)}>
        <Button>
          <MessageSquarePlus /> Додати відгук
        </Button>
      </DialogTrigger>
      <DialogContent className="top-1/4">
        <DialogHeader>
          <DialogTitle>Відгук</DialogTitle>
          <DialogDescription>Будь ласка, опишіть ваш досвід</DialogDescription>
        </DialogHeader>
        <DialogBody>
          <ReviewForm
            employerId={employerId}
            onSuccess={() => {
              setOpen(false);
              router.refresh();
            }}
          />
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
}
