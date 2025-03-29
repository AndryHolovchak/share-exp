'use client';

import { useEffect, useRef } from 'react';

function scrollStep(target: HTMLDivElement, maxScroll: number) {
  if (target.scrollLeft < maxScroll) {
    target.scrollLeft += 1;
    requestAnimationFrame(() => scrollStep(target, maxScroll));
  }
}

const useAutoScroll = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollToEnd = () => {
      if (targetRef.current) {
        const target = targetRef.current;
        const maxScroll = target.scrollWidth - target.clientWidth;

        scrollStep(target, maxScroll);
      }
    };

    scrollToEnd();
  }, []);

  return { ref: targetRef };
};

export default useAutoScroll;
