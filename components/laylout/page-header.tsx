import { ReactNode } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import UserMenu from '@/features/users/components/user-menu';
import AuthGate from '@/auth/containers/auth-gate';
import SignInButton from '@/auth/components/sign-in-button';

interface Props {
  centralSlot?: ReactNode;
  withBackButton?: boolean;
  backButtonHref?: string;
}

export function PageHeader({
  centralSlot,
  withBackButton,
  backButtonHref,
}: Props) {
  return (
    <header className="sticky top-0 z-[1000]">
      <Card className="flex items-center rounded-none p-3 shadow-sm">
        {withBackButton && (
          <Link href={backButtonHref ?? './'}>
            <Button variant="outline" className="mr-6">
              <ChevronLeft />
            </Button>
          </Link>
        )}

        {centralSlot && (
          <div className="flex w-full flex-1 justify-center pr-[80px] sm:px-[80px]">
            {centralSlot}
          </div>
        )}

        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <AuthGate
            authenticated={<UserMenu />}
            unauthenticated={<SignInButton />}
          />
        </div>
      </Card>
    </header>
  );
}
