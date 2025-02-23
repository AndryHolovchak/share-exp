'use client';

import { useSession } from 'next-auth/react';
import { ReactNode } from 'react';
import Loader from '@/components/ui/loader';

interface Props {
  authenticated?: ReactNode;
  unauthenticated?: ReactNode;
}

export default function AuthGate({ authenticated, unauthenticated }: Props) {
  const { status } = useSession();

  switch (status) {
    case 'loading':
      return <Loader />;
    case 'authenticated':
      return authenticated;
    case 'unauthenticated':
      return unauthenticated;
    default:
      return null;
  }
}
