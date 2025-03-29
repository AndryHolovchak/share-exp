'use client';

import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MouseEventHandler } from 'react';

interface Props extends ButtonProps {
  href?: string;
  target?: '_blank' | '_self';
}

export default function LinkButton({
  className,
  onClick,
  href,
  target,
  ...props
}: Props) {
  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();

    if (href) {
      window.open(href, target);
    } else if (onClick) {
      onClick(event);
    }
  };

  return (
    <Button
      variant="link"
      {...props}
      onClick={handleClick}
      className={cn('p-0', className)}
    />
  );
}
