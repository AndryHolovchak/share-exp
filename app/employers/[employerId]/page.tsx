import { Reviews } from '@/features/reviews/components/reviews';
import { NextPageProps } from '@/types/next';
import employerProvider from '@/data/providers/employer-provider';
import { PageHeader } from '@/components/laylout/page-header';
import { PageContent } from '@/components/laylout/page-content';
import { EmployerBaseInfo } from '@/features/employers/components/employer-base-info';

type Props = NextPageProps<{ employerId: string }>;

export default async function ProductPage({ params: { employerId } }: Props) {
  const employer = await employerProvider.get(employerId);
  // console.log(employer);
  if (!employer) {
    return <div>unknown employer</div>;
  }

  return (
    <div>
      <PageHeader leftSlot={<EmployerBaseInfo employer={employer} />} />
      <PageContent>
        <Reviews employer={employer} />
      </PageContent>
    </div>
  );
}

export async function generateStaticParams() {
  const products = await employerProvider.list();
  const productIds = Object.keys(products);

  return productIds.map((id) => ({
    employerId: id,
  }));
}
