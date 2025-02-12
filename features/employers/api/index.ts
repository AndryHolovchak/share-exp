import { Employer } from '@/features/employers/types';
import { apiFetch } from '@/api-fetch/api-fetch';
import { SEARCH_PARAM } from '@/constants/search-params';

export const fetchAllEmployers = async (search: string | null) =>
  apiFetch<Employer[]>('/employers', {
    searchParams: { [SEARCH_PARAM]: search },
  });
