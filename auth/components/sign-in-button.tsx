'use client';

import useDialog from '@/hooks/use-dialog';
import { Button, ButtonProps } from '@/components/ui/button';
import SignInModal from '@/auth/components/sign-in-modal';

export default function SignInButton(props: Omit<ButtonProps, 'onClick'>) {
  const disclosure = useDialog();

  return (
    <>
      <Button
        size="sm"
        variant="outline"
        onClick={disclosure.onOpen}
        {...props}
      >
        Увійти
      </Button>
      <SignInModal {...disclosure} />
    </>
  );
}
