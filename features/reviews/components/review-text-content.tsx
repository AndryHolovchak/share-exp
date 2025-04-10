import { twMerge } from 'tailwind-merge';

interface Props {
  value: string;
  type: 'pros' | 'cons';
}

const TITLE_CONFIG: Record<
  Props['type'],
  { content: string; className: string }
> = {
  pros: {
    content: 'Переваги',
    className: 'text-green-600',
  },
  cons: {
    content: 'Недоліки',
    className: 'text-red-600',
  },
};
// <EditorValue value={review.} />

export default function ReviewTextContent({ value, type }: Props) {
  const titleConfig = TITLE_CONFIG[type];

  return (
    <div className="flex flex-col gap-1">
      <span className={twMerge('font-medium', titleConfig.className)}>
        {titleConfig.content}
      </span>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        tincidunt ultricies lacinia. Donec sollicitudin arcu augue, vel tempor
        orci tincidunt eget. Praesent malesuada nunc at velit consectetur
        dictum. Phasellus ut nulla venenatis, faucibus urna a, lobortis risus.
        Proin sit amet massa sem. Suspendisse lorem velit, porta id ex vel,
        vehicula gravida eros. Vivamus felis dui, eleifend a erat in,
        consectetur tincidunt lorem. Duis pellentesque condimentum massa.
        Integer sit amet dapibus elit. Mauris vel turpis id dui mattis rutrum
        vitae ac nisl. In hac habitasse platea dictumst. Quisque faucibus
        lobortis faucibus. Donec sodales sit amet justo volutpat euismod. Fusce
        bibendum nec mauris ut tincidunt. Curabitur in vestibulum leo.
      </span>
    </div>
  );
}
