import { Employer } from '@/features/employers/types';
import { ListPaginationParams, ListParams, ListResponse } from '@/types/list';
import { Review, ReviewContent } from '@/features/reviews/types';
import { apiAction, apiGet } from '@/network/api-fetch';

const EMPLOYERS_API = {
  fetchAllEmployers: async (params: ListParams) =>
    apiGet<ListResponse<Employer>>('/employers', params),

  fetchEmployerById: async (id: string) => apiGet<Employer>(`/employers/${id}`),

  fetchEmployerReviews: async (id: string, params: ListPaginationParams) =>
    apiGet<ListResponse<Review>>(`/employers/${id}/reviews`, params),

  createReview: async (id: string, body: ReviewContent) =>
    apiAction<ListResponse<Review>>(`/employers/${id}/reviews`, {
      body,
    }),

  editReview: async (id: string, { ratings, anonymous }: ReviewContent) =>
    apiAction(`/employers/reviews/${id}`, {
      body: {
        // ratings: rating,
        // content,
        anonymous,
      },
      method: 'PUT',
    }),

  deleteReview: async (id: string) =>
    apiAction(`/employers/reviews/${id}`, {
      method: 'DELETE',
    }),
};

export default EMPLOYERS_API;
