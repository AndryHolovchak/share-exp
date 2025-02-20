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
import { UseDialogReturn } from '@/hooks/use-dialog';
import { AuthDialogConfig } from '@/auth/providers/auth-dialog-provider/types';

type Props = Pick<UseDialogReturn, 'open' | 'onClose'> & {
  config?: AuthDialogConfig;
};

export default function AuthDialog({ open, onClose, config }: Props) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="top-1/4">
        <DialogHeader>
          <DialogTitle>... Але спочатку, потрібно увійти</DialogTitle>
          {config?.description && (
            <DialogDescription>{config?.description}</DialogDescription>
          )}
        </DialogHeader>
        <DialogBody>body</DialogBody>
      </DialogContent>
    </Dialog>
  );
}
