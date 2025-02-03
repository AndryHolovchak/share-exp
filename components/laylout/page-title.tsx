import { PropsWithChildren } from 'react';

export function PageTitle({ children }: PropsWithChildren) {
  return <h1 className="mb-4 text-xl font-medium">{children}</h1>;
}
