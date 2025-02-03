import { Reviews } from '@/features/reviews/components/reviews';
import { NextPageProps } from '@/types/next';
import employerProvider from '@/data/providers/employer-provider';

type Props = NextPageProps<{ employerId: string }>;

export default async function ProductPage({ params: { employerId } }: Props) {
  const product = await employerProvider.get(employerId);

  if (!product) {
    return <div>unknown product</div>;
  }

  return <Reviews product={product} />;
}

export async function generateStaticParams() {
  const products = await employerProvider.list();
  const productIds = Object.keys(products);

  return productIds.map((id) => ({
    employerId: id,
  }));
}
