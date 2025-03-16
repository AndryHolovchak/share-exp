'use client';

import { FrownIcon } from 'lucide-react';
import getIllustrationPath from '@/utils/get-illustration-path';
import { EmptyState } from '@/components/ui/empty-state';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';

export default function Error(props: any) {
  return (
    <div className="flex h-[100vh] flex-col items-center justify-center">
      <EmptyState
        imageSrc={getIllustrationPath('fatal-error')}
        title={
          <div className="flex items-center gap-2 text-primary">
            <span className="text-3xl font-medium">Ой, щось пішло не так</span>
            <FrownIcon />
          </div>
        }
        description={
          <div className="flex flex-col items-center gap-2">
            <span className="text-red-600">{props.error?.message}</span>
            <Link
              href={ROUTES.EMPLOYERS()}
              className="text-xl font-medium text-blue-600 underline"
            >
              До списку роботодавців
            </Link>
          </div>
        }
      />
    </div>
  );
}
