import useDisclosure from '@/hooks/use-disclosure';
import { useCallback } from 'react';

export interface UseDialogReturn {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  onOpenChange: (open: boolean) => void;
}

export default function useDialog(): UseDialogReturn {
  const disclosure = useDisclosure();

  const onOpenChange = useCallback(
    (open: boolean) => {
      if (open) {
        disclosure.onOpen();
      } else {
        disclosure.onClose();
      }
    },
    [disclosure.onOpen, disclosure.onClose]
  );

  return {
    open: disclosure.isOpen,
    onOpen: disclosure.onOpen,
    onClose: disclosure.onClose,
    onOpenChange,
  };
}
