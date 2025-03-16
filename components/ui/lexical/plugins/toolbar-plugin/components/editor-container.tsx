'use client';

import { PropsWithChildren } from 'react';

export default function EditorContainer({ children }: PropsWithChildren) {
  return (
    <div className="lexical relative rounded border shadow-md">{children}</div>
  );
}
