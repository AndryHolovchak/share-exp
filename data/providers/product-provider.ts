import DataProvider from '@/data/data-provider';
import { Product } from '@/features/product/types';
import { REVIEW_DATA } from '@/data/providers/review-provider';

const DATA: Record<Product['id'], Product> = {
  '1': {
    id: '1',
    name: 'Mower3000',
    reviews: Object.values(REVIEW_DATA),
  },
};

const productProvider = new DataProvider<Product>(DATA);

export default productProvider;
