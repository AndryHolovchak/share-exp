'use client';

import { DotsVerticalIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { twMerge } from 'tailwind-merge';

interface Props {
  className?: string;
}

export default function ReviewActionMenu({ className }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className={twMerge(className)} variant="ghost" size="icon">
          <DotsVerticalIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Редагувати</DropdownMenuItem>
        <DropdownMenuItem className="text-destructive">
          Видалити
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
