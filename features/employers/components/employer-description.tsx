import { cn } from '@/lib/utils';

interface Props {
  description: string;
  className?: string;
}

export default function EmployerDescription({ description, className }: Props) {
  return (
    <div
      className={cn('text-left text-slate-800', className)}
      dangerouslySetInnerHTML={{
        __html: description,
      }}
    />
  );
}
