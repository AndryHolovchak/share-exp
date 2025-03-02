import { Checkbox } from '@/components/ui/checkbox';
import { ReactNode, useId } from 'react';
import { CheckboxProps } from '@radix-ui/react-checkbox';

interface Props extends CheckboxProps {
  label: ReactNode;
  description?: ReactNode;
}

export default function CheckboxField({
  label,
  description,
  ...checkboxProps
}: Props) {
  const id = useId();

  return (
    <div className="items-top flex space-x-2">
      <Checkbox {...checkboxProps} id={id} />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor={id}
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {label}
        </label>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
