import * as React from 'react';
import { Input, InputProps } from '@/components/ui/inputs/input';
import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface Props extends InputProps {
  button?: ButtonProps;
}

const InputWithButton = React.forwardRef<HTMLInputElement, Props>(
  ({ button, ...props }, ref) => {
    return (
      <div className="flex items-center gap-2">
        <Input {...props} ref={ref} />
        <Button
          {...button}
          disabled={button?.disabled ?? props.disabled}
          className={cn('m-0', button?.className)}
        />
      </div>
    );
  }
);
InputWithButton.displayName = 'InputWithButton';

export { InputWithButton };
