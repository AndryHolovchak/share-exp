import { AlertDialogProps } from '@radix-ui/react-alert-dialog';
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from '@/components/ui/alert-dialog';
import { ReactNode, useState } from 'react';
import Loader from '@/components/ui/loader';

interface Props extends AlertDialogProps {
  title: ReactNode;
  description?: ReactNode;
  trigger?: ReactNode;
  confirmation: {
    text: string;
    autoclose?: boolean;
    onClick: () => unknown | Promise<unknown>;
  };
}

export default function ConfirmationModal({
  trigger,
  title,
  description,
  confirmation,
  ...props
}: Props) {
  const [isConfirming, setIsConfirming] = useState(false);

  const handleConfirm = async () => {
    if (!confirmation.autoclose) {
      setIsConfirming(true);
      await confirmation.onClick();
      setIsConfirming(false);
    } else {
      await confirmation.onClick();
    }
  };

  return (
    <AlertDialog {...props}>
      {trigger && <AlertDialogTrigger>{trigger}</AlertDialogTrigger>}
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          {description && (
            <AlertDialogDescription>{description}</AlertDialogDescription>
          )}
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isConfirming}>
            Відмінити
          </AlertDialogCancel>
          <AlertDialogAction
            disabled={isConfirming}
            onClick={(event) => {
              if (!confirmation.autoclose) {
                event.preventDefault();
              }

              void handleConfirm();
            }}
          >
            {isConfirming && <Loader />}
            {confirmation.text}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
