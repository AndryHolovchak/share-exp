import { Reviews } from '@/features/review/components/reviews';
import { NextPageProps } from '@/types/next';
import productProvider from '@/data/providers/product-provider';

type Props = NextPageProps<{ productId: string }>;

export default async function ProductPage({ params: { productId } }: Props) {
  const product = await productProvider.get(productId);

  if (!product) {
    return <div>unknown product</div>;
  }

  return <Reviews product={product} />;
}

export async function generateStaticParams() {
  const products = await productProvider.list();
  const productIds = Object.keys(products);

  return productIds.map((id) => ({
    productId: id,
  }));
}
