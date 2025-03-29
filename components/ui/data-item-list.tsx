import DataItem, { DataItemConfig } from '@/components/ui/data-item';
import { cn } from '@/lib/utils';

interface Item<Data> {
  key: keyof Data;
  className?: string;
  icon?: DataItemConfig['icon'];
  render?: (value: Data) => DataItemConfig['value'];
}

export type DataItemListConfig<Data> = Item<Data>[];

interface Props<Data> {
  data: Data;
  config: DataItemListConfig<Data>;
  className?: string;
}

export default function DataItemList<Data>({
  config,
  data,
  className,
}: Props<Data>) {
  return (
    <div className={cn('flex flex-col gap-0.5', className)}>
      {config.map(({ key, icon, render, className }) => (
        <DataItem
          key={key.toString()}
          icon={icon}
          className={className}
          value={render ? render(data) : data[key]?.toString()}
        />
      ))}
    </div>
  );
}
