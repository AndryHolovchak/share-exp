import { RequiredSignInModalConfig } from '@/auth/providers/required-sign-in-modal-provider/types';
import { useRequiredSignInModalContext } from '../providers/required-sign-in-modal-provider';
import { useSession } from 'next-auth/react';

interface Props<Args extends any[], ReturnType> {
  fn: (...args: Args) => ReturnType;
  modalConfig?: RequiredSignInModalConfig;
}

export default function useSignedInOnly<Args extends any[], ReturnType>({
  fn,
  modalConfig,
}: Props<Args, ReturnType>) {
  const { showSignInModal } = useRequiredSignInModalContext();
  const session = useSession();

  return (...args: Args) => {
    if (session.status === 'authenticated') return fn(...args);
    showSignInModal(modalConfig);
  };
}
