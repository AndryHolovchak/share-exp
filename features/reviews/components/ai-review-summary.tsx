import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from '@/components/ui/card';
import { summarizeReviews } from '@/lib/ai-summary';
import { RatingView } from './rating-view/rating-view';
import { Employer } from '@/features/employers/types';
import { Rating } from '@/features/reviews/types';

export async function AIReviewSummary({ employer }: { employer: Employer }) {
  const summary = await summarizeReviews(employer, []);

  return (
    <Card className="grid w-full gap-10 p-4">
      <CardHeader className="items-center gap-4 space-y-0 p-0">
        <div className="grid gap-1 text-center">
          <CardTitle className="text-lg">AI Summary</CardTitle>
          <CardDescription className="text-xs">
            Based on {employer.totalReviews} customer ratings
          </CardDescription>
        </div>
        <div className="flex items-center rounded-full bg-gray-100 px-3 py-2 dark:bg-gray-800">
          <RatingView rating={Math.round(employer.averageRating) as Rating} />
          <span className="ml-4 text-sm text-gray-500 dark:text-gray-400">
            {numberWithOneDecimal(employer.averageRating)} out of 5
          </span>
        </div>
      </CardHeader>
      <CardContent className="grid gap-4 p-0">
        {/*<p className="text-sm leading-loose text-gray-500 dark:text-gray-400">*/}
        {/*  {summary}*/}
        {/*</p>*/}
      </CardContent>
    </Card>
  );
}

function numberWithOneDecimal(num: number) {
  if (num === Math.round(num)) return num;
  return Math.round(num * 10) / 10;
}
