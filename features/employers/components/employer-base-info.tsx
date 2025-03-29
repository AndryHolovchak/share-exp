import { Employer } from '@/features/employers/types';
import Image from 'next/image';
import { RatingView } from '@/features/reviews/components/rating-view/rating-view';

interface Props {
  employer: Pick<
    Employer,
    'name' | 'averageRating' | 'totalReviews' | 'logoUrl'
  >;
}

export function EmployerBaseInfo({ employer }: Props) {
  return (
    <div className="flex items-start gap-4">
      {employer.logoUrl && (
        <Image
          src={employer.logoUrl}
          width={96}
          height={96}
          alt="logo"
          className="rounded"
        />
      )}
      <div className="flex items-center gap-2">
        <span>{employer.name}</span>
        <RatingView rating={employer.averageRating} />
        <span>({employer.totalReviews})</span>
      </div>
    </div>
  );
}
