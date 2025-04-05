import { ReactNode } from 'react';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
  MenubarLabel,
  MenubarSeparator,
  MenubarGroup,
} from '@/components/ui/menubar';

export interface DropdownMenuOption {
  content: ReactNode;
  onClick?: () => void;
}

interface Props {
  trigger: ReactNode;
  label?: ReactNode;
  options: DropdownMenuOption[];
}

export default function DropdownMenu({ label, trigger, options }: Props) {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>{trigger}</MenubarTrigger>
        <MenubarContent align="end">
          {label && (
            <>
              <MenubarLabel>{label}</MenubarLabel>
              <MenubarSeparator />
            </>
          )}
          <MenubarGroup>
            {options.map((option, index) => (
              <MenubarItem key={index} onClick={option.onClick}>
                {option.content}
              </MenubarItem>
            ))}
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
