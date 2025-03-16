import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface Props extends Omit<ButtonProps, 'type'> {
  active?: boolean;
}

export default function ToolbarButton({ active, className, ...props }: Props) {
  return (
    <Button
      size="icon"
      type="button"
      variant="ghost"
      {...props}
      className={cn(active && 'bg-accent', 'text-md', className)}
    />
  );
}
