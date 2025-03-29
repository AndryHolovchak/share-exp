import { useCallback, useEffect, useRef, useState } from 'react';
import getRandomInt from '@/utils/get-random-int';

interface Props {
  text: string;
  onTyped?: VoidFunction;
}

type Speed = 'normal' | 'quickest';

const SPEED_VALUES: Record<Speed, [number, number]> = {
  quickest: [60, 60],
  normal: [80, 250],
};

export default function useTyping({ text, onTyped }: Props) {
  const [action, setAction] = useState<'add' | 'remove' | 'idle'>('idle');
  const [typed, setTyped] = useState('');
  const typedRef = useRef(typed);
  typedRef.current = typed;

  const onTypedRef = useRef(onTyped);
  onTypedRef.current = onTyped;

  const emulateTyping = useCallback(
    (type: VoidFunction, speed: Speed) =>
      window.setTimeout(type, getRandomInt(...SPEED_VALUES[speed])),
    []
  );

  useEffect(() => {
    if (typedRef.current && typedRef.current !== text) {
      setAction('remove');
    } else {
      setAction('add');
    }
  }, [text]);

  useEffect(() => {
    let addTimeout: number;
    let removeTimeout: number;
    let changeActionTimeout: number;

    const add = () => {
      const newValue = typedRef.current + text[typedRef.current.length];

      setTyped(newValue);

      if (newValue.length === text.length) {
        changeActionTimeout = window.setTimeout(() => {
          setAction('idle');
          onTypedRef.current?.();
        }, 2000);
      } else {
        addTimeout = emulateTyping(add, 'normal');
      }
    };

    const remove = () => {
      const newValue = typedRef.current.slice(0, -1);
      setTyped(newValue);

      if (newValue.length > 0) {
        removeTimeout = emulateTyping(remove, 'quickest');
      } else {
        changeActionTimeout = window.setTimeout(() => setAction('add'), 500);
      }
    };

    if (action === 'add') {
      add();
    } else if (action === 'remove') {
      remove();
    }

    return () => {
      clearTimeout(addTimeout);
      clearTimeout(removeTimeout);
      clearTimeout(changeActionTimeout);
    };
  }, [emulateTyping, action, text]);

  return typed;
}
