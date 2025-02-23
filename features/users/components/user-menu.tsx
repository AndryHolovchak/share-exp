'use client';

import Image from 'next/image';
import { signOut, useSession } from 'next-auth/react';
import DropdownMenu from '@/components/ui/dropdown-menu';
import { CircleUserRound } from 'lucide-react';

export default function UserMenu() {
  const { data } = useSession();

  const user = data?.user;

  if (!user) return null;

  return (
    <DropdownMenu
      trigger={
        <div className="flex items-center gap-2">
          <span className="text-sm">{user.name}</span>
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
      }
      options={[
        {
          content: <span className="text-destructive">Вийти</span>,
          onClick: signOut,
        },
      ]}
    />
  );
}
