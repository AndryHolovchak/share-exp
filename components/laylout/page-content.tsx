import { PropsWithChildren } from 'react';

export function PageContent({ children }: PropsWithChildren) {
  return <div className="flex-1 p-6 pt-0">{children}</div>;
}
