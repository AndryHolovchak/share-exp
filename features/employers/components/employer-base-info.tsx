import { Employer, EmployerDetails } from '@/features/employers/types';
import Image from 'next/image';
import { RatingView } from '@/features/reviews/components/rating-view/rating-view';
import { InfoIcon, LinkIcon } from 'lucide-react';
import DataItemList, {
  DataItemListConfig,
} from '@/components/ui/data-item-list';
import LinkButton from '@/components/ui/link-button';

interface Props {
  employer: Pick<
    Employer,
    | 'name'
    | 'averageRating'
    | 'totalReviews'
    | 'logoUrl'
    | 'website'
    | 'categoryDescription'
  >;
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

export function EmployerBaseInfo({ employer }: Props) {
  return (
    <div className="flex w-full flex-col justify-between">
      <div className="flex justify-between gap-1">
        <div className="flex flex-col gap-1">
          <b>{employer.name}</b>
          <RatingView
            rating={employer.averageRating}
            count={employer.totalReviews}
          />
        </div>
        {employer.logoUrl && (
          <Image
            unoptimized
            src={employer.logoUrl}
            width={100}
            height={50}
            alt="logo"
            className="h-[50px] w-[100px]"
          />
        )}
      </div>
      <div className="flex flex-col gap-1">
        <DataItemList
          data={employer}
          config={DATA_ITEM_LIST_CONFIG}
          className="mt-1"
        />
        <span className="text-sm text-slate-500">
          {employer.categoryDescription}
        </span>
      </div>
    </div>
  );
}
