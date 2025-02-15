import { KeyboardEventHandler } from 'react';

export const onEnterClick = (callback: VoidFunction): KeyboardEventHandler => {
  return (event) => {
    if (event.key === 'Enter') {
      callback();
    }
  };
};
