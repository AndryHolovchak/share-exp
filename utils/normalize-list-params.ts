import { ListParams } from '@/types/list';
import { normalizeListPaginationParams } from '@/utils/normalize-list-pagination-params';

export function normalizeListParams(params: Partial<ListParams>): ListParams {
  return {
    search: params.search ?? '',
    ...normalizeListPaginationParams(params),
  };
}
