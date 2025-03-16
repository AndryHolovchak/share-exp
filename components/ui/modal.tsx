import { ReactNode } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

export interface ModalBaseProps {
  open: boolean;
  onClose: VoidFunction;
}

interface Props extends ModalBaseProps {
  title?: ReactNode;
  description?: ReactNode;
  content?: ReactNode;
  className?: string;
}

export default function Modal({
  open,
  onClose,
  title,
  description,
  content,
  className,
}: Props) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className={className}>
        <DialogHeader>
          {title && <DialogTitle>{title}</DialogTitle>}
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        {content && <div>{content}</div>}
      </DialogContent>
    </Dialog>
  );
}
