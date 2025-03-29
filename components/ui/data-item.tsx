import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export interface DataItemConfig {
  className?: string;
  icon: ReactNode;
  value?: ReactNode;
}

export default function DataItem({ icon, value, className }: DataItemConfig) {
  return (
    <label className={cn('flex items-center gap-2 text-sm', className)}>
      <div className="[&>svg]:size-4">{icon}</div>
      {value}
    </label>
  );
}
