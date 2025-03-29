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
      <div className="flex h-12 items-center gap-0">
        <Input
          {...props}
          containerClassName={cn(
            'flex-1 h-full rounded-br-none rounded-tr-none border-r-0',
            props?.containerClassName
          )}
          ref={ref}
          onKeyDown={onEnterClick(handleEnterClick)}
        />
        <Button
          {...button}
          disabled={isDisabled}
          className={cn(
            'm-0 h-full rounded-bl-none rounded-tl-none',
            button?.className
          )}
        />
      </div>
    );
  }
);
InputWithButton.displayName = 'InputWithButton';

export { InputWithButton };
