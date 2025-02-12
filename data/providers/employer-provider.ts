import DataProvider from '@/data/data-provider';
import { Employer } from '@/features/employers/types';
import { REVIEW_DATA } from '@/data/providers/review-provider';

export const EMPLOYER_TAG = 'employer';
const employerProvider = new DataProvider<Employer>(EMPLOYER_TAG, 'employers');

export default employerProvider;
