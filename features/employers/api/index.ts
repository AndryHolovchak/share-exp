import { Employer } from '@/features/employers/types';
import { apiFetch } from '@/api-fetch/api-fetch';
import { ListParams, ListResponse } from '@/types/list';

export const fetchAllEmployers = async (params: ListParams) =>
  apiFetch<ListResponse<Employer>>('/employers', {
    searchParams: { ...params },
  });
