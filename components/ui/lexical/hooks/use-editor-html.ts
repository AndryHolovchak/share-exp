import { useEffect, useState } from 'react';
import convertEditorStateToHtml from '@/components/ui/lexical/utils/convert-editor-state-to-html';

interface Props {
  state: string;
}

export default function useEditorHtml({ state }: Props) {
  const [html, setHtml] = useState('');

  useEffect(() => {
    convertEditorStateToHtml(state).then(setHtml);
  }, [state]);

  return html;
}
