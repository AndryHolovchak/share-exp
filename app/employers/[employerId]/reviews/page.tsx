import { NextPageProps } from '@/types/next';
import EMPLOYERS_API from '@/features/employers/api';
import { PageHeader } from '@/components/laylout/page-header';
import { PageContent } from '@/components/laylout/page-content';
import { ListPaginationParams } from '@/types/list';
import AddReviewButton from '@/features/reviews/components/add-review-button';
import { redirect, RedirectType } from 'next/navigation';
import { ROUTES } from '@/constants/routes';
import PageIntro from '@/components/ui/page-intro';
import { EmployerBaseInfo } from '@/features/employers/components/employer-base-info';
import EmployerDescription from '@/features/employers/components/employer-description';
import EmployerRatingsOverview from '@/features/employers/components/employer-ratings-overview';
import { Separator } from '@/components/ui/separator';

type Props = NextPageProps<{ employerId: string }, ListPaginationParams>;

export default async function EmployerReviewsPage({
  params,
  searchParams,
}: Props) {
  const { employerId } = await params;
  const pagination = await searchParams;
  const employer = await EMPLOYERS_API.fetchEmployerById(employerId);

  if (!employer) {
    return redirect(ROUTES.EMPLOYERS(), RedirectType.replace);
  }

  return (
    <div>
      <PageHeader withBackButton backButtonHref="../" />
      <PageIntro
        className="py-2"
        innerClassName="gap-2 md:gap-2"
        title={
          <EmployerBaseInfo
            nameComponent="h1"
            titleClassName="text-xl font-medium"
            employer={employer}
            hidden={{ rating: true }}
          />
        }
        content={
          <div className="flex flex-col gap-9">
            <div className="flex flex-col gap-3">
              <EmployerDescription
                className="text-sm text-slate-600"
                description={employer.shortDescriptionHtml}
              />
              <Separator className="mx-auto bg-slate-300" />
              <EmployerRatingsOverview ratings={employer.averageRatings} />
            </div>
            <AddReviewButton employerId={employerId} className="mb-8 w-full" />
          </div>
        }
      />
      <PageContent>
        {/*<EmployerReviews*/}
        {/*  employerId={employerId}*/}
        {/*  pagination={normalizeListPaginationParams(pagination)}*/}
        {/*/>*/}
      </PageContent>
    </div>
  );
}
