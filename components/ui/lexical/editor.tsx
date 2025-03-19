import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import {
  InitialConfigType,
  LexicalComposer,
} from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import ToolbarPlugin from '@/components/ui/lexical/plugins/toolbar-plugin/toolbar-plugin';
import editorTheme from '@/components/ui/lexical/theme';
import './styles.css';
import EditorContainer from '@/components/ui/lexical/plugins/toolbar-plugin/components/editor-container';
import EditorInput from '@/components/ui/lexical/plugins/toolbar-plugin/components/editor-input';

import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { ParagraphNode, RootNode, TextNode } from 'lexical';
import InitialValuePlugin from '@/components/ui/lexical/plugins/toolbar-plugin/components/initial-value-plugin';

interface Props {
  initialValue?: string;
  onChange: (value: string) => void;
}

export const EDITOR_NODES = [ParagraphNode, TextNode, RootNode] as const;

const config: InitialConfigType = {
  namespace: 'editor',
  theme: editorTheme,
  nodes: EDITOR_NODES,
  onError: console.log,
};

export default function Editor({ onChange, initialValue }: Props) {
  return (
    <EditorContainer>
      <LexicalComposer initialConfig={config}>
        <ToolbarPlugin />
        <RichTextPlugin
          contentEditable={<EditorInput />}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <HistoryPlugin />
        <AutoFocusPlugin />
        <OnChangePlugin
          onChange={(state) => {
            onChange(JSON.stringify(state.toJSON()));
          }}
        />
        <InitialValuePlugin value={initialValue} />
      </LexicalComposer>
    </EditorContainer>
  );
}
