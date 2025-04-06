import { ReviewRatingCategory } from '@/features/reviews/types';

export const REVIEW_RATING_CATEGORY_LABELS: Record<
  ReviewRatingCategory,
  string
> = {
  salary_and_benefits: 'Зарплата та бонуси',
  work_life_balance: 'Баланс роботи та життя',
  justice_and_equality: 'Справедливість та рівність',
  career_growth: "Кар'єрні можливості",
  management: 'Керівництво та управління',
};
