import { ElementType, PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';

interface Props extends PropsWithChildren {
  as?: ElementType;
  className?: string;
}

export function PageContent({
  as: Component = 'main',
  children,
  className,
}: Props) {
  return (
    <Component className={cn('mx-auto max-w-[720px] flex-1 p-6', className)}>
      {children}
    </Component>
  );
}
