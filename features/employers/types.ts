import { Rating } from '@/features/reviews/types';

export interface EmployerDetails {
  name: string;
  shortDescriptionHtml: string;
  fullDescriptionHtml: string;
  categoryDescription: string;
  logoUrl?: string;
  website?: string;
}

export interface Employer extends EmployerDetails {
  _id: string;
  createdAt: string;
  totalReviews: number;
  averageRating: Rating;
}
