import DataProvider from '@/data/data-provider';
import { Employer } from '@/features/employers/types';
import { REVIEW_DATA } from '@/data/providers/review-provider';

const DATA: Record<Employer['id'], Employer> = {
  '1': {
    id: '1',
    averageRating: 1,
    name: 'Roshen',
    categories: ['Роздрібна торгівля'],
    description:
      'Працювати в корпорації ROSHEN – означає постійно рухатися вперед. ROSHEN пишається своїми працівниками, створює для них найкращі умови для реалізації свого потенціалу і надихає на нові звершення.',
    reviews: Object.values(REVIEW_DATA),
  },
};

const employerProvider = new DataProvider<Employer>(DATA);

export default employerProvider;
