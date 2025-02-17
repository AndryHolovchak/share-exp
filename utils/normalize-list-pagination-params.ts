import { ListPaginationParams, ListParams } from '@/types/list';

export function normalizeListPaginationParams(
  params: Partial<ListPaginationParams>
): ListPaginationParams {
  return {
    page: Math.max(1, params.page ?? 1),
    limit: Math.max(10, params.page ?? 10),
  };
}
