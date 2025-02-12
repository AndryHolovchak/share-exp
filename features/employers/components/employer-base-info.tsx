import { Employer } from '@/features/employers/types';
import Image from 'next/image';
import { RatingView } from '@/features/reviews/components/rating-view/rating-view';

interface Props {
  employer: Pick<Employer, 'name' | 'averageRating' | 'totalReviews'>;
}

export function EmployerBaseInfo({ employer }: Props) {
  return (
    <div className="flex items-start gap-4">
      <Image
        src="https://picsum.photos/200"
        width={64}
        height={64}
        alt="logo"
        className="rounded"
      />
      <div className="flex items-center gap-2">
        <span>{employer.name}</span>
        <RatingView rating={employer.averageRating} />
        <span>({employer.totalReviews})</span>
      </div>
    </div>
  );
}
