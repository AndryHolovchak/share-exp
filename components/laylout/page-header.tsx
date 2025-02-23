import { HTMLProps, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import UserMenu from '@/features/users/components/user-menu';
import AuthGate from '@/auth/containers/auth-gate';
import SignInButton from '@/auth/components/sign-in-button';

interface Props {
  leftSlot?: ReactNode;
  centralSlot?: ReactNode;
  rightSlot?: ReactNode;
  withBackButton?: boolean;
  backButtonHref?: string;
}

function Slot(props: HTMLProps<HTMLDivElement>) {
  return (
    <div {...props} className={cn('flex items-center', props.className)} />
  );
}

export function PageHeader({
  leftSlot,
  centralSlot,
  rightSlot,
  withBackButton,
  backButtonHref,
}: Props) {
  return (
    <header className="sticky top-0">
      <Card className="mb-8 flex items-center rounded-none p-6">
        {withBackButton && (
          <Link href={backButtonHref ?? './'}>
            <Button variant="outline" className="mr-6">
              <ChevronLeft />
            </Button>
          </Link>
        )}

        <div className="grid flex-1 grid-cols-[0.5fr_1fr_0.5fr] gap-2">
          <Slot>{leftSlot}</Slot>
          <Slot className="justify-center">{centralSlot}</Slot>
          <Slot>
            {rightSlot}
            <div className="ml-auto">
              <AuthGate
                authenticated={<UserMenu />}
                unauthenticated={<SignInButton />}
              />
            </div>
          </Slot>
        </div>
      </Card>
    </header>
  );
}
