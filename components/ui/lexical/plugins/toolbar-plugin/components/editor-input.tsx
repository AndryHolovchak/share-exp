import {
  ContentEditable,
  ContentEditableProps,
} from '@lexical/react/LexicalContentEditable';
import { cn } from '@/lib/utils';

export default function EditorInput({
  className,
  ...props
}: ContentEditableProps) {
  return (
    <ContentEditable
      className={cn(
        'max-h-[300px] min-h-[200px] overflow-y-auto p-4 focus:outline-none',
        className
      )}
      {...props}
    />
  );
}
