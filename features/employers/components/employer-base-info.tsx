import { Employer, EmployerDetails } from '@/features/employers/types';
import Image from 'next/image';
import { RatingView } from '@/features/reviews/components/rating-view/rating-view';
import { InfoIcon, LinkIcon } from 'lucide-react';
import DataItemList, {
  DataItemListConfig,
} from '@/components/ui/data-item-list';
import LinkButton from '@/components/ui/link-button';
import calculateAverageRating from '@/features/reviews/utils/calculateAverageRating';
import reviewRatingsView from '@/features/reviews/components/review-ratings-view';
import ReviewRatingsView from '@/features/reviews/components/review-ratings-view';
import { JSX } from 'react';
import { cn } from '@/lib/utils';

interface Props {
  employer: Pick<
    Employer,
    | 'name'
    | 'averageRatings'
    | 'totalReviews'
    | 'logoUrl'
    | 'website'
    | 'categoryDescription'
  >;
  hidden?: { rating?: boolean };
  titleClassName?: string;
  nameComponent?: keyof JSX.IntrinsicElements;
}

const DATA_ITEM_LIST_CONFIG: DataItemListConfig<
  Pick<EmployerDetails, 'website' | 'categoryDescription'>
> = [
  {
    key: 'website',
    className: 'cursor-pointer text-sky-500 w-fit',
    icon: <LinkIcon />,
    render: ({ website }) => (
      <LinkButton
        href={website}
        target="_blank"
        className="h-fit text-inherit hover:underline"
      >
        Сайт
      </LinkButton>
    ),
  },
];

export function EmployerBaseInfo({
  employer,
  hidden,
  titleClassName,
  nameComponent: NameComponent = 'h4',
}: Props) {
  return (
    <div className="flex w-full flex-col justify-between">
      <div className="flex justify-between gap-1">
        <div className="flex flex-col items-start gap-1">
          <NameComponent
            className={cn('font-medium leading-normal', titleClassName)}
          >
            {employer.name}
          </NameComponent>
          {!hidden?.rating && (
            <RatingView
              count={employer.totalReviews}
              rating={calculateAverageRating(
                Object.values(employer.averageRatings)
              )}
            />
          )}

          <DataItemList data={employer} config={DATA_ITEM_LIST_CONFIG} />
        </div>
        {employer.logoUrl && (
          <Image
            unoptimized
            src={employer.logoUrl}
            width={80}
            height={40}
            alt="logo"
            className="h-[40px] w-[80px]"
          />
        )}
      </div>
      <span className="text-left text-sm text-slate-500">
        {employer.categoryDescription}
      </span>
    </div>
  );
}
