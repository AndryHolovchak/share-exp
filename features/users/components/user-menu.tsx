'use client';

import Image from 'next/image';
import { signOut, useSession } from 'next-auth/react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { CircleUserRound } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/constants/routes';

export default function UserMenu() {
  const { data } = useSession();
  const router = useRouter();

  const user = data?.user;

  if (!user) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex items-center gap-4">
          {user.image ? (
            <Image
              className="rounded-full"
              src={user.image}
              alt={'avatar'}
              width={42}
              height={42}
            />
          ) : (
            <CircleUserRound height={42} width={42} strokeWidth={1} />
          )}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => router.push(ROUTES.MY_REVIEWS)}>
          Мої Відгуки
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => signOut()}>
          <span className="text-destructive">Вийти</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
