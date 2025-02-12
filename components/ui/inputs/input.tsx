import * as React from 'react';

import { cn } from '@/lib/utils';
import { PropsWithChildren, ReactNode } from 'react';

function AdornmentContainer({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={cn(
        'flex items-center justify-center bg-transparent text-muted-foreground [&>svg]:w-5',
        className
      )}
    >
      {children}
    </div>
  );
}

export interface InputProps extends React.ComponentProps<'input'> {
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  containerClassName?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      startAdornment,
      endAdornment,
      containerClassName,
      ...props
    },
    ref
  ) => {
    return (
      <label
        className={cn(
          'flex h-9 overflow-hidden rounded-md border border-input bg-transparent text-base shadow-sm transition-colors file:border-0 file:bg-transparent focus-within:ring-1 focus-within:ring-ring md:text-sm',
          { 'cursor-not-allowed opacity-50': props.disabled },
          containerClassName
        )}
      >
        {startAdornment && (
          <AdornmentContainer className="pl-2">
            {startAdornment}
          </AdornmentContainer>
        )}
        <input
          type={type}
          className={cn(
            'h-full w-full px-3 py-1 file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-inherit',
            className
          )}
          ref={ref}
          {...props}
        />
        {endAdornment && (
          <AdornmentContainer className="pr-2">
            {endAdornment}
          </AdornmentContainer>
        )}
      </label>
    );
  }
);
Input.displayName = 'Input';

export { Input };
