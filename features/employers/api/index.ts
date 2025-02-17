import { Employer } from '@/features/employers/types';
import { apiAction, apiFetch, apiGet } from '@/network/api-fetch';
import { ListPaginationParams, ListParams, ListResponse } from '@/types/list';
import { Review, ReviewFormValues } from '@/features/reviews/types';

const EMPLOYERS_API = {
  fetchAllEmployers: async (params: ListParams) =>
    apiGet<ListResponse<Employer>>('/employers', params),

  fetchEmployerById: async (id: string) => apiGet<Employer>(`/employers/${id}`),

  fetchEmployerReviews: async (id: string, params: ListPaginationParams) =>
    apiGet<ListResponse<Review>>(`/employers/${id}/reviews`, params),

  createReview: async (id: string, body: ReviewFormValues) =>
    apiAction<ListResponse<Review>>(`/employers/${id}/reviews`, {
      body,
    }),
};

export default EMPLOYERS_API;
