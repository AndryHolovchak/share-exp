'use client';

import useEditorHtml from '@/components/ui/lexical/hooks/use-editor-html';

interface Props {
  value: string;
}

export default function EditorValue({ value }: Props) {
  const html = useEditorHtml({ state: value });
  console.log({ html, value });
  return <div className="lexical" dangerouslySetInnerHTML={{ __html: html }} />;
}
