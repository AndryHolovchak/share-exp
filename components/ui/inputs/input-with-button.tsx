import * as React from 'react';
import { Input, InputProps } from '@/components/ui/inputs/input';
import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { onEnterClick } from '@/utils/key-handlers';

interface Props extends InputProps {
  button?: ButtonProps & { onClick?: VoidFunction };
}

const InputWithButton = React.forwardRef<HTMLInputElement, Props>(
  ({ button, ...props }, ref) => {
    const isDisabled = button?.disabled ?? props.disabled;

    const handleEnterClick = () => {
      if (!isDisabled) button?.onClick?.();
    };

    return (
      <div className="flex items-center gap-2">
        <Input
          {...props}
          ref={ref}
          onKeyDown={onEnterClick(handleEnterClick)}
        />
        <Button
          {...button}
          disabled={isDisabled}
          className={cn('m-0', button?.className)}
        />
      </div>
    );
  }
);
InputWithButton.displayName = 'InputWithButton';

export { InputWithButton };
