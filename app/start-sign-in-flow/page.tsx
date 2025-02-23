'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import Loader from '@/components/ui/loader';

export default function Page() {
  const params = useSearchParams();
  const provider = params.get('provider');
  const { data: session, status } = useSession();

  useEffect(() => {
    switch (status) {
      case 'authenticated': {
        window.location.replace('/');
        break;
      }
      case 'unauthenticated': {
        provider && void signIn(provider);
        break;
      }
    }
  }, [session, status]);

  return (
    <div className="flex h-[100vh] w-[100vw] items-center justify-center">
      <Loader />
    </div>
  );
}
