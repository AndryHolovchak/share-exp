import { ReactNode } from 'react';
import { PageContent } from '@/components/laylout/page-content';
import { cn } from '@/lib/utils';

interface Props {
  title?: ReactNode;
  subtitle?: ReactNode;
  content?: ReactNode;
  className?: string;
  innerClassName?: string;
}

export default function PageIntro({
  title,
  subtitle,
  content,
  className,
  innerClassName,
}: Props) {
  return (
    <div
      className={cn(
        'flex items-center bg-primary-foreground py-[80px]',
        className
      )}
    >
      <PageContent
        as="header"
        className={cn(
          'flex flex-col gap-6 text-center md:gap-10',
          innerClassName
        )}
      >
        {title}
        <div className="flex flex-col gap-2">
          {subtitle}
          {content}
        </div>
      </PageContent>
    </div>
  );
}
