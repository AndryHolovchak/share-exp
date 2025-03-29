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
      {...props}
      variant="link"
      onClick={handleClick}
      className={cn('p-0 text-blue-500', className)}
    />
  );
}
