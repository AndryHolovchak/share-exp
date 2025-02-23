import { ReactNode } from 'react';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar';

export interface DropdownMenuOption {
  content: ReactNode;
  onClick?: () => void;
}

interface Props {
  trigger: ReactNode;
  options: DropdownMenuOption[];
}

export default function DropdownMenu({ trigger, options }: Props) {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>{trigger}</MenubarTrigger>
        <MenubarContent align="end">
          {options.map((option, index) => (
            <MenubarItem key={index} onClick={option.onClick}>
              {option.content}
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
