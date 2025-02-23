import { useEffect, useRef } from 'react';
import { AvailableSignInProvider } from '@/auth/components/sign-in-providers/types';
import { useSession } from 'next-auth/react';

//  This hook is used to open a sign-in flow in a new window
export default function useSignIn() {
  const session = useSession();
  const signInWindowRef = useRef<Window | null>(null);

  const signIn = (provider: AvailableSignInProvider) => {
    signInWindowRef.current = window.open(
      `start-sign-in-flow?provider=${provider}`,
      '_blank'
    );

    signInWindowRef.current?.focus();
  };

  // Close the sign-in window after the user has signed in
  useEffect(() => {
    return () => {
      signInWindowRef.current?.close();
    };
  }, [session]);

  return { signIn };
}
