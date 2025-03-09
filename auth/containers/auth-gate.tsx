'use client';

import { useSession } from 'next-auth/react';
import { ReactNode, useEffect, useRef } from 'react';
import Loader from '@/components/ui/loader';
import { useRouter } from 'next/navigation';

interface Props {
  authenticated?: ReactNode;
  unauthenticated?: ReactNode;
}

export default function AuthGate({ authenticated, unauthenticated }: Props) {
  const { status } = useSession();
  const router = useRouter();
  const routerRef = useRef(router);
  routerRef.current = router;

  useEffect(() => {
    routerRef.current.refresh();
  }, [status]);

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
