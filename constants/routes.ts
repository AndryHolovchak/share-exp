export const ROUTES = {
  MY_REVIEWS: '/my-reviews',
  EMPLOYERS: (id?: string) => (id ? `/employers/${id}` : '/employers'),
  EMPLOYER_REVIEW: (id: string) => `${ROUTES.EMPLOYERS(id)}/reviews`,
} as const;
