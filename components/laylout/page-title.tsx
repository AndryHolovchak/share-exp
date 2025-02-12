import { PropsWithChildren } from 'react';

export function PageTitle({ children }: PropsWithChildren) {
  return <h1 className="text-xl font-medium">{children}</h1>;
}
