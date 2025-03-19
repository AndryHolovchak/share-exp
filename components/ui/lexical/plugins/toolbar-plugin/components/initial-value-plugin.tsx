'use client';

import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { useEffect, useRef } from 'react';

interface Props {
  value?: string;
}

export default function InitialValuePlugin({ value }: Props) {
  const [editor] = useLexicalComposerContext();
  const editorRef = useRef(editor);
  editorRef.current = editor;

  const valueRef = useRef(value);
  valueRef.current = value;

  useEffect(() => {
    if (valueRef.current) {
      editorRef.current.setEditorState(
        editorRef.current.parseEditorState(valueRef.current)
      );
    }
  }, []);

  return null;
}
