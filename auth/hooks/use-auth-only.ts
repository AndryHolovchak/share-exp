import { AuthDialogConfig } from '@/auth/providers/auth-dialog-provider/types';
import useIsAuthenticated from '@/auth/hooks/use-is-authenticated';
import { useAuthModalContext } from '@/auth/providers/auth-dialog-provider';

interface Props<Args extends any[], ReturnType> {
  fn: (...args: Args) => ReturnType;
  authDialogConfig?: AuthDialogConfig;
}

export default function useAuthOnly<Args extends any[], ReturnType>({
  fn,
  authDialogConfig,
}: Props<Args, ReturnType>) {
  const { showAuthDialog } = useAuthModalContext();
  const isAuthenticated = useIsAuthenticated();

  return (...args: Args) => {
    if (isAuthenticated) return fn(...args);
    showAuthDialog(authDialogConfig);
  };
}
