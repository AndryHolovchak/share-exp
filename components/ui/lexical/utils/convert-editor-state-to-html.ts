import { createEditor } from 'lexical';
import { EDITOR_NODES } from '@/components/ui/lexical/Editor';
import editorTheme from '@/components/ui/lexical/theme';
import { $generateHtmlFromNodes } from '@lexical/html';

export default async function convertEditorStateToHtml(state: string) {
  const editor = createEditor({ nodes: EDITOR_NODES, theme: editorTheme });

  await new Promise<void>((resolve) => {
    editor.update(() => {
      editor.setEditorState(editor.parseEditorState(JSON.parse(state)));
      resolve();
    });
  });

  return new Promise<string>((resolve) => {
    editor.read(() => {
      resolve($generateHtmlFromNodes(editor, null));
    });
  });
}
