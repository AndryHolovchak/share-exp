import { ReactNode } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { DialogBody } from 'next/dist/client/components/react-dev-overlay/internal/components/Dialog';

export interface ModalBaseProps {
  open: boolean;
  onClose: VoidFunction;
}

interface Props extends ModalBaseProps {
  title?: ReactNode;
  description?: ReactNode;
  content?: ReactNode;
}

export default function Modal({
  open,
  onClose,
  title,
  description,
  content,
}: Props) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="top-1/4">
        <DialogHeader>
          {title && <DialogTitle>{title}</DialogTitle>}
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        {content && <DialogBody>{content}</DialogBody>}
      </DialogContent>
    </Dialog>
  );
}
