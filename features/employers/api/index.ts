import { Employer } from '@/features/employers/types';
import { apiFetch } from '@/api-fetch/api-fetch';
import { ListPaginationParams, ListParams, ListResponse } from '@/types/list';
import { Review } from '@/features/reviews/types';

export const fetchAllEmployers = async (params: ListParams) =>
  apiFetch<ListResponse<Employer>>('/employers', {
    searchParams: { ...params },
  });

export const fetchEmployerById = async (id: string) =>
  apiFetch<Employer>(`/employers/${id}`);

export const fetchEmployerReviews = async (
  id: string,
  params: ListPaginationParams
) =>
  apiFetch<ListResponse<Review>>(`/employers/${id}/reviews`, {
    searchParams: { ...params },
  });
