import { PropsWithChildren } from 'react';

export function PageContent({ children }: PropsWithChildren) {
  return (
    <div className="mx-auto max-w-[720px] flex-1 p-6 pt-0">{children}</div>
  );
}
