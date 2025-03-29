import { ReactNode } from 'react';

export interface DataItemConfig {
  icon: ReactNode;
  value?: ReactNode;
}

export default function DataItem({ icon, value }: DataItemConfig) {
  return (
    <div className="flex items-center gap-2">
      <div className="[&>svg]:size-4">{icon}</div>
      {value}
    </div>
  );
}
